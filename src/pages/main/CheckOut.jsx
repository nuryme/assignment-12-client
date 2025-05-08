import React from "react";
import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import { Link, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import useAuthInfo from "../../hooks/useAuthInfo";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckOut = () => {
  const { id } = useParams();
  const { user } = useAuthInfo();

  return (
    <div className=" mt-24 py-24 container  mx-auto">
      <SectionTitleUnderline
        underline="Checkout"
        after="form"
      ></SectionTitleUnderline>
      <div className="md:flex gap-20 justify-center mt-12">
        <div style={{ width: "500px", height: "500px" }}>
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/01/eb/27/01eb2738952ea0d643b45b5622242152.jpg"
            alt=""
          />
        </div>

        <div className="w-full max-w-lg p-8 rounded-xl bg-secondary/50 space-y-4">
          <div className="space-y-1">
            <label htmlFor="username" className="block font-medium">
              Bio data Id
            </label>
            <input
              type="number"
              name="bioId"
              defaultValue={id}
              readOnly
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="password"
              defaultValue={user?.email}
              readOnly
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm bioId={id}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
