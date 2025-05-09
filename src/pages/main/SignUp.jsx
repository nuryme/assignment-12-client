import React from "react";
import { Link, useNavigate } from "react-router";
import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";
import toast from "react-hot-toast";
import useAuthInfo from "../../hooks/useAuthInfo";
import { saveUser } from "./../../api/utils";

const SignUp = () => {
  const { newUser, setUser, updateUser, googleSignIn } = useAuthInfo();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    // const user = { name, email, password, image };

    newUser(email, password).then((res) => {
      setUser(res.user);

      updateUser(name, image).then(() => {
        toast.success("Sign up successful!");
        saveUser(res?.user);

        navigate("/");
      });
    });
  };

  return (
    <div className=" mt-24 py-24 container  mx-auto">
      <SectionTitleUnderline
        underline="Register"
        before="please"
      ></SectionTitleUnderline>
      <div className=" max-w-2xl p-8 space-y-3 rounded-xl bg-secondary/50 mx-auto mt-12 shadow-2xl">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="space-y-4">
            <div className="">
              <label className="">Name</label>
              <input
                name="name"
                type="text"
                placeholder="your name"
                className="w-full bg-white placeholder:text-gray-400 py-2 px-4 focus:outline-primary rounded-md mt-2"
              />
            </div>
            <div className="">
              <label className="">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your email"
                className="w-full bg-white placeholder:text-gray-400 py-2 px-4 focus:outline-primary rounded-md mt-2"
              />
            </div>
            <div className="">
              <label className="">Password</label>
              <input
                name="password"
                type="password"
                placeholder="your password"
                className="w-full bg-white placeholder:text-gray-400 py-2 px-4 focus:outline-primary rounded-md mt-2"
              />
            </div>
            <div className="">
              <label className="">Photo</label>
              <input
                name="image"
                type="url"
                placeholder="past photo url"
                className="w-full bg-white placeholder:text-gray-400 py-2 px-4 focus:outline-primary rounded-md mt-2"
              />
            </div>
            <button className="primaryBtn w-full rounded-md">Sign in</button>
          </fieldset>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-primary"></div>
          <p className="px-3 dark:text-gray-600">
            Sign Up with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-primary"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              googleSignIn()
                .then((res) => {
                  setUser(res.user);

                  saveUser(res?.user);
                  toast.success("SignUp Successful!");
                  navigate(location.state || "/");
                })
                .catch((err) => console.log(err.message));
            }}
            aria-label="Log in with Google"
            className="p-3 rounded-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current "
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-sm text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link to={"/login"} className="underline text-primary ml-1">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
