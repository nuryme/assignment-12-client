import { Rating, ThinStar } from "@smastrom/react-rating";
import SectionTitleFlower from "../shared components/SectionTitleFlower";
import { useState } from "react";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import Loading from "../pages/Loading";

const SuccessStory = () => {
  const [rating, setRating] = useState(4);
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["married"],
    queryFn: async () =>
      await axiosPublic.get("/married").then((res) => res.data),
  });

  if (isLoading) return <Loading></Loading>;
  return (
    <div className="container mx-auto">
      <SectionTitleFlower title="Success story"></SectionTitleFlower>
      <div className="mt-12 space-y-12">
        {data.map((married) => (
          <div
            key={married._id}
            className=" mx-auto 
       md:flex items-center"
          >
            <div className="md:w-1/2">
              <img
                src={married.couple_image}
                alt=""
                className="object-center w-full h-[400px] rounded object-cover lg:col-span-7 dark:bg-gray-500"
              />
            </div>
            <div className="p-6 space-y-2 md:w-1/2">
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
              />
              <h6 className="font-semibold uppercase">
                marriage date: {married.marriage_date}
              </h6>
              <p className="text-bodyText">
                {married.your_story}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
