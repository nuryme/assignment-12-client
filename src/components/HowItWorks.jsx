import React from "react";
import SectionTitleFlower from "../shared components/SectionTitleFlower";
import gettingMarraige from '../assets/gettingMarraige.png'

const HowItWorks = () => {
  return (
    <div className="container mx-auto how-works">
      <SectionTitleFlower title="How It Works"></SectionTitleFlower>

      <div className="mt-12 w-[70%] mx-auto">
        <ul className="relative">
          <li className="pb-20">
            <div className="grid grid-cols-2 gap-20">
              <div className="">
                <img
                  className="w-40 float-right"
                  src="https://rn53themes.net/themes/matrimo/images/icon/rings.png"
                  alt=""
                />
              </div>
              <div>
                <h4 className="uppercase text-primary mb-4 font-medium">register</h4>
                <p className="leading-8">
                  Sign up and share details about yourself — your interests,
                  values, and what you’re looking for in a life partner.
                </p>
              </div>
            </div>
          </li>
          <li className="pb-20">
            <div className="grid grid-cols-2 gap-20">
              <div className="text-right">
                <h4 className="uppercase text-primary mb-4 font-medium">Discover Matches</h4>
                <p className="leading-8">
                  Our smart search and filtering tools help you explore
                  compatible profiles based on your preferences.
                </p>
              </div>
              <div className="">
                <img
                  className="w-40 float-left"
                  src="	https://rn53themes.net/themes/matrimo/images/icon/wedding-2.png"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="pb-20">
            <div className="grid grid-cols-2 gap-20">
              <div className="">
                <img
                  className="w-40 float-right"
                  src="	https://rn53themes.net/themes/matrimo/images/icon/love-birds.png"
                  alt=""
                />
              </div>
              <div>
                <h4 className="uppercase text-primary mb-4 font-medium">
                  Sent contact information request
                </h4>
                <p className="leading-8">
                  Like someone's profile? Send them an interest or message to
                  start a meaningful conversation.
                </p>
              </div>
            </div>
          </li>
          <li className="pb-20">
            <div className="grid grid-cols-2 gap-20">
              <div className="text-right">
                <h4 className="uppercase text-primary mb-4 font-medium">Get contact Information</h4>
                <p className="leading-8">
                  Our smart search and filtering tools help you explore
                  compatible profiles based on your preferences.
                </p>
              </div>
              <div className="">
                <img
                  className="w-40 float-left"
                  src="	https://rn53themes.net/themes/matrimo/images/icon/network.png"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="pb-20">
            <div className="grid grid-cols-2 gap-20">
              <div className="">
                <img
                  className="w-40 float-right"
                  src="		https://rn53themes.net/themes/matrimo/images/icon/chat.png"
                  alt=""
                />
              </div>
              <div>
                <h4 className="uppercase text-primary mb-4 font-medium">
                Start Meetups
                </h4>
                <p className="leading-8">
                  Like someone's profile? Send them an interest or message to
                  start a meaningful conversation.
                </p>
              </div>
            </div>
          </li>
          <li className="pb-20">
            <div className="grid grid-cols-2 gap-20">
              <div className="text-right">
                <h4 className="uppercase text-primary mb-4 font-medium">Getting Marriage</h4>
                <p className="leading-8">
                  Our smart search and filtering tools help you explore
                  compatible profiles based on your preferences.
                </p>
              </div>
              <div className="">
                <img
                  className="w-[300px] h-44 object-cover float-left"
                  src={gettingMarraige}
                  alt=""
                />
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
