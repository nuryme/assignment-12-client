import React from "react";
import { Link } from "react-router";

const Card = () => {
  return (
    <div className="w-full max-w-xs bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <img
        className="w-full h-56 object-cover"
        src="https://i.pravatar.cc/300?img=5"
        alt="Profile"
      />
      <div className="p-4 space-y-2">
        <h4 className="">Biodata ID: 1</h4>
        <p className="text-gray-600">
          Type: <span className="font-medium">Male</span>
        </p>
        <p className="text-gray-600">
          Division: <span className="font-medium">Dhaka</span>
        </p>
        <p className="text-gray-600">
          Age: <span className="font-medium">30</span>
        </p>
        <p className="text-gray-600">
          Occupation: <span className="font-medium">Job</span>
        </p>
        <Link to={'/details/1'} className="flex justify-center mt-6">
          <button className="primaryBtn">View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
