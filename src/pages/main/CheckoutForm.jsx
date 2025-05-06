import React from "react";

const CheckoutForm = () => {
  return (
    <div>
        <div className="space-y-1">
          <label htmlFor="username" className="block font-medium">
            Bio Data Id:
          </label>
          <input
            type="text"
            name="email"
            required
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <button className="primaryBtn w-full rounded-md">Sign in</button>
    </div>
  );
};

export default CheckoutForm;
