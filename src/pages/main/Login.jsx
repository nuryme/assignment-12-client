import { Link } from "react-router";
import SectionTitleUnderline from "../../shared components/SectionTitleUnderline";

const Login = () => {
  return (
    <div className=" mt-24 py-24 container  mx-auto">
      <SectionTitleUnderline
        underline="login"
        before="please"
      ></SectionTitleUnderline>
      <div className="md:flex gap-20 justify-center mt-12">
        <div style={{ width: "500px", height: "500px" }}>
          <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/1f/8f/5c/1f8f5cee30f4a0a371db7d3482b56526.jpg" alt="" />
        </div>

        <div className="w-full max-w-lg p-8 space-y-3 rounded-xl bg-secondary/50 ">
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="username" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button className="primaryBtn w-full rounded-md">Sign in</button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-primary"></div>
            <p className="px-3 dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-primary"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-sm text-center sm:px-6 dark:text-gray-600">
            Don't have an account?
            <Link to={"/signUp"} className="underline text-primary ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
