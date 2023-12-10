import logo from "../assets/logo.svg";
import arrdown from "../assets/arrdown.svg";
import search from "../assets/search.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((active) => !active);
    console.log(isOpenMenu);
  };

  return (
    <div className="px-8 lg:px-24 h-[75px] flex items-center relative">
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="flex items-center ml-20 font-inter text-slate-500">
            <Link to="/explore">
              <li className="mr-2 px-4">Explore</li>
            </Link>
            <Link to="/features">
              <li className="mx-2 px-4">Features</li>
            </Link>
            <Link to="/resources">
              <li className="mx-2 px-4 flex items-center">
                <span className="inline-block mr-2">Resources</span>{" "}
                <img src={arrdown} alt="" />
              </li>
            </Link>
            <Link to="/pricing">
              <li className="mx-2 px-4">Pricing</li>
            </Link>
          </ul>
        </div>
        <ul className="flex font-inter">
          <Link to="/login">
            <li className="px-4 py-2 border-2 border-slate-400 text-slate-700 font-bold rounded-lg mr-4">
              Log in
            </li>
          </Link>
          <Link to="/signup">
            <li className="px-4 py-2 border-slate-400 bg-blue text-white font-bold rounded-lg">
              Get Started
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between w-full lg:hidden">
        <div className="flex">
          <div
            className="w-[40px] h-[30px] flex flex-col justify-between mr-3"
            onClick={handleClick}
          >
            <div
              className={`w-[40px] h-[3px] rounded-sm bg-black duration-300 ${
                isOpenMenu
                  ? "rotate-45 translate-y-[14px] -translate-x-[8px] w-[45px]"
                  : ""
              }`}
            ></div>
            <div
              className={`w-[25px] h-[3px] rounded-sm bg-black duration-300 ${
                isOpenMenu ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-[40px] h-[3.5px] rounded-sm bg-black duration-300 ${
                isOpenMenu
                  ? "-rotate-45 -translate-y-[14px] -translate-x-[8px] w-[45px]"
                  : ""
              }`}
            ></div>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="flex">
            <img src={search} alt="" />

            <Link to="/signup">
            <div className="px-4 py-2 ml-3 border-slate-400 bg-blue text-white font-bold rounded-lg font-inter">
              Sign Up
            </div>
          </Link>
        </div>
        <div className={`w-[calc(100%-75px)] h-[calc(100vh-75px)] top-[75px] left-0  absolute bg-blue z-20 duration-300 ${isOpenMenu ? '' : '-left-[100%]'} `}>
            
        </div>
      </div>
    </div>
  );
}
