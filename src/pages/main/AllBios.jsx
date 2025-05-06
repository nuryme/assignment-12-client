import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import Card from "../../shared components/Card";

const AllBios = () => {
  return (
    <div className="mt-24 py-24 container mx-auto">
      <SectionTitleUnderline
        before="all"
        underline="bio data"
      ></SectionTitleUnderline>

      <div className="grid grid-cols-12 gap-6 md:gap-10 mt-12 ">
        <aside className="w-full p-6 sm:w-60 bg-secondary rounded col-span-6 md:col-span-4 lg:col-span-2 h-fit">
          <h5 className="uppercase text-primary text-center">filter</h5>
          <div className="space-y-4">
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
              <select defaultValue={'type'} className="bg-white p-2 w-full rounded-md" name="" id="">
                <option value="type">male or female</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </fieldset>
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="url" className="block font-medium">
                Division
              </label>
              <select defaultValue={'division'} className="bg-white p-2 w-full rounded-md" name="" id="">
                <option value="division">select a division</option>
                <option value="dhaka" className="capitalize">dhaka</option>
                <option value="chattagram" className="capitalize">chattagram</option>
                <option value="rangpur" className="capitalize">rangpur</option>
                <option value="barishal" className="capitalize">barishal</option>
                <option value="khulna" className="capitalize">khulna</option>
                <option value="mymensignh" className="capitalize">mymensignh</option>
                <option value="sylhet" className="capitalize">sylhet</option>
              </select>
            </fieldset>
          </div>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 col-span-6 md:col-span-8 lg:col-span-10 h-fit">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default AllBios;
