import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import useAuthInfo from "../hooks/useAuthInfo";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const mobileMenuRef = useRef(null);
  const {user , signOutUser} = useAuthInfo()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target))
        setDropDown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>home</NavLink>
      </li>
      <li>
        <NavLink to={"/allBios"}>all bio data</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutUs"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/contactUs"}>contact us</NavLink>
      </li>
    </>
  );

  return (
    <header className="p-4 bg-secondary fixed top-0 left-0 right-0 navbar uppercase">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to={'/'} className="flex items-center p-2 w-[150px]">
          <img className="w-full" src={logo} alt="" />
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">{links}</ul>
        <div className="items-center flex-shrink-0 flex gap-2">
          {
            user ? <>
            <img onClick={() => {
              signOutUser()
            }
            } title="Log Out" src={user?.photoURL} className="w-12 h-12 object-cover rounded-full cursor-pointer" alt="" />
            <Link to={'/dashboard'}><button className="primaryBtn">Dashboard</button></Link></> : <>
            <Link to={'/login'}><button className="primaryBtn">Login</button></Link>
            <Link to={'/signUp'}><button className="secondaryBtn border border-primary">Sign Up</button></Link>
            </>
          }
          
          
        </div>
        <div ref={mobileMenuRef} className="lg:hidden relative">
          <button
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className="mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            className={`space-y-2 absolute right-0 py-4 mt-4 bg-secondary/50 w-[150px] items-center flex-col ${
              dropDown ? "flex " : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
