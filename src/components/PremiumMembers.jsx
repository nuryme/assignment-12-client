import SectionTitleUnderline from "../shared components/SectionTitleUnderline";
import Card from "../shared components/Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import Loading from "../pages/Loading";
import { useEffect, useState } from "react";

const PremiumMembers = () => {
  const axiosPublic = useAxiosPublic();
  const [order, setOrder] = useState("");
  const [bio, setBio] = useState([]);

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await axiosPublic.get(`/premium-members`).then((res) => res.data),
  });

  useEffect(() => {
    if (!users) return;

    let sorted = users.slice();

    if (order === "asc") {
      sorted.sort((a, b) => a?.bio_data?.age - b?.bio_data?.age);
    } else if (order === "desc") {
      sorted.sort((a, b) => b?.bio_data?.age - a?.bio_data?.age);
    }
    setBio(sorted);
  }, [order, users]);

  // console.log(order);
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="my-24 container mx-auto">
      <SectionTitleUnderline
        underline={"premium"}
        after={"members"}
      ></SectionTitleUnderline>

      <div className="mt-12 flex justify-end">
        <fieldset className="max-w-lg space-y-1 bg-secondary/50 p-6 rounded-md  dark:text-gray-800">
          <label htmlFor="url" className="block font-bold">
            Age Order
          </label>
          <select
            onChange={(e) => {
              setOrder(e.target.value);
            }}
            defaultValue={""}
            className="bg-white p-2 w-full rounded-md capitalize"
            name=""
            id=""
          >
            <option value="">select a age order</option>
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </fieldset>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {bio?.map((user) => (
          <Card key={user._id} bio={user.bio_data}></Card>
        ))}
      </div>
    </div>
  );
};

export default PremiumMembers;
