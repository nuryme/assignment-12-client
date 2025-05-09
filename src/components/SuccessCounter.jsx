import React from "react";
import SectionTitleUnderline from "../shared components/SectionTitleUnderline";
import useAxiosPublic from './../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from "../pages/Loading";

const SuccessCounter = () => {
  const axiosPublic  = useAxiosPublic()

  const {data, isLoading} = useQuery({
    queryKey: ['success-counter'],
    queryFn: async () => await axiosPublic.get('/success-counter').then(res => res.data)
  })

  // console.log(data)
if(isLoading) return <Loading></Loading>
  return (
    <div className="my-24 container mx-auto">
      <SectionTitleUnderline
        underline="success"
        after="counter"
      ></SectionTitleUnderline>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="p-8 mx-auto rounded-lg bg-secondary w-[310px]">
          <div className="flex gap-6">
          <img
            src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
            className="rounded-full w-[100px] h-[100px]"
            alt=""
          />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">total couple</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.totalBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-[310px]">
          <div className="flex gap-6">
          <img
            src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
            className="rounded-full w-[100px] h-[100px]"
            alt=""
          />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">Male bio</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.maleBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-[310px]">
          <div className="flex gap-6">
          <img
            src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
            className="rounded-full w-[100px] h-[100px]"
            alt=""
          />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">female bio</p>
              <h4 className="font-bold font-playfairDisplay relative">
                {data.femaleBio} <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto rounded-lg bg-secondary w-[310px]">
          <div className="flex gap-6">
          <img
            src="https://i.pinimg.com/736x/1d/9d/50/1d9d50c4ce398559c939946f82a0dbdc.jpg"
            className="rounded-full w-[100px] h-[100px]"
            alt=""
          />
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase mt-4 ">marriage</p>
              <h4 className="font-bold font-playfairDisplay relative">
                1000 <span className=" absolute -top-2 text-primary">+</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SuccessCounter;
