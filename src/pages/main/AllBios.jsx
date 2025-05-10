import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import Card from "../../shared components/Card";
import useAllBio from "../../hooks/useAllBio";
import Loading from "./../Loading";
import { useState } from "react";

const AllBios = () => {
  const { bio_data, isLoading, isFetching } = useAllBio({limit: 'all', type: 'all'});
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");

  if (isLoading) return <Loading></Loading>;
  if (isFetching) return <Loading></Loading>;

  const filterData = bio_data.filter((bio) => {
    const min = parseInt(minAge) || 0;
    const max = parseInt(maxAge) || 100;

    const filterType = type === "" || bio.type === type;
    const filterDivision = address === "" || bio.present_address === address;
    return bio.age >= min && bio.age <= max && filterType && filterDivision;
  });

  // console.log(bio_data)

  const handleReset = (e) => {
    e.preventDefault()

    e.target.reset()
  }

  return (
    <div className="mt-24 py-24 container mx-auto">
      <SectionTitleUnderline
        before="all"
        underline="bio data"
      ></SectionTitleUnderline>

      <div className="grid grid-cols-12 gap-6 md:gap-10 mt-12 ">
        <aside className="w-full p-6 sm:w-60 bg-secondary rounded col-span-6 md:col-span-4 lg:col-span-2 h-fit">
          <h5 className="uppercase text-primary text-center">filter</h5>
          <form
            onSubmit={handleReset}
            className="space-y-4"
          >
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="url" className="block font-medium">
                Age
              </label>
              <div className="space-y-2">
                <div className="flex">
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-300">
                    Min
                  </span>
                  <input
                    onChange={(e) => {
                      setMinAge(e.target.value);
                    }}
                    value={minAge}
                    type="number"
                    placeholder="min age"
                    className="border sm:text-sm rounded-r-md dark:border-gray-300 bg-white p-1 w-full "
                  />
                </div>
                <div className="flex">
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-300">
                    Max
                  </span>
                  <input
                    onChange={(e) => {
                      setMaxAge(e.target.value);
                    }}
                    value={maxAge}
                    type="text"
                    placeholder="max age"
                    className="border sm:text-sm rounded-r-md dark:border-gray-300 bg-white p-1 w-full "
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="url" className="block font-medium">
                Type
              </label>
              <select
                onChange={(e) => {
                  setType(e.target.value);
                }}
                defaultValue={""}
                className="bg-white p-2 w-full rounded-md capitalize"
                name=""
                id=""
              >
                <option value="">male or female</option>
                <option value="Male">male</option>
                <option value="Female">female</option>
              </select>
            </fieldset>
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="url" className="block font-medium">
                Division
              </label>
              <select
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                defaultValue={""}
                className="bg-white p-2 w-full rounded-md capitalize"
                name=""
                id=""
              >
                <option value="">select a division</option>
                <option value="dhaka">dhaka</option>
                <option value="chattagram">chattagram</option>
                <option value="rangpur">rangpur</option>
                <option value="barishal">barishal</option>
                <option value="khulna">khulna</option>
                <option value="mymensignh">mymensignh</option>
                <option value="sylhet">sylhet</option>
              </select>
            </fieldset>
            <button className="secondaryBtn border border-primary">Reset</button>
          </form>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 col-span-6 md:col-span-8 lg:col-span-10 h-fit  gap-6">
          {filterData.map((bio) => (
            <Card key={bio._id} bio={bio} isLoading={isLoading}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBios;
