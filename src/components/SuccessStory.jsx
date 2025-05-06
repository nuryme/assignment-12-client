import React from "react";
import SectionTitleFlower from "../shared components/SectionTitleFlower";

const SuccessStory = () => {
  return (
    <div className="container mx-auto">
      <SectionTitleFlower title="Success story"></SectionTitleFlower>
      <div className="mt-12 space-y-12">
        <div
          className=" mx-auto 
     md:flex items-center"
        >
          <div className="md:w-1/2">
            <img
              src="https://i.pinimg.com/736x/d6/49/c4/d649c485651574752969806eceefba75.jpg"
              alt=""
              className="object-top w-full h-[400px] rounded object-cover lg:col-span-7 dark:bg-gray-500"
            />
          </div>
          <div className="p-6 space-y-2 md:w-1/2">
            <h4 className="font-semibold">
              Noster tincidunt reprimique ad pro
            </h4>
            <span className="text-xs dark:text-gray-600">
              February 19, 2021
            </span>
            <h5>stars</h5>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </div>
        <div
          className=" mx-auto 
     md:flex md:flex-row-reverse items-center"
        >
          <div className="md:w-1/2">
            <img
              src="https://i.pinimg.com/736x/d6/49/c4/d649c485651574752969806eceefba75.jpg"
              alt=""
              className="object-top w-full h-[400px] rounded object-cover lg:col-span-7 dark:bg-gray-500"
            />
          </div>

          <div className="p-6 space-y-2 md:w-1/2">
            <h4 className="font-semibold">
              Noster tincidunt reprimique ad pro
            </h4>
            <span className="text-xs dark:text-gray-600">
              February 19, 2021
            </span>
            <h5>stars</h5>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
