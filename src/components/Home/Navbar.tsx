import logo from "@/assets/logo.png";
import arrdown from "@/assets/arrdown.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((active) => !active);
    console.log(isOpenMenu);
  };

  return (
    <div className="bg-white px-6 lg:px-24 h-[75px] flex items-center fixed w-full border-b">
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12" />
          </Link>
          <ul className="flex items-center ml-20 font-inter text-slate-500">
            <Link to="#">
              <li className="mr-2 px-4">Explore</li>
            </Link>
            <Link to="/features">
              <li className="mx-2 px-4">Features</li>
            </Link>
            <Link to="#">
              <li className="mx-2 px-4 flex items-center">
                <span className="inline-block mr-2">Resources</span>{" "}
                <img src={arrdown} alt="" />
              </li>
            </Link>
            <Link to="#">
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

      {/* -------------------------- Mobile Navigation ------------------------------ */}
      <div className="flex justify-between items-center w-full lg:hidden">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="" className="h-12" />
          </Link>
        </div>

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
        <div
          className={`w-[calc(100%-75px)] h-[calc(100vh-75px)] top-[75px] bg-white border-r absolute  z-20 duration-300 ${
            isOpenMenu ? " left-0" : "  -left-[100%]"
          } flex items-center justify-center text-center`}
        >
          <ul className="font-inter text-2xl font-semibold">
            <Link to="/explore" onClick={handleClick}>
              <li className="px-4 py-2 my-3">Explore</li>
            </Link>
            <Link to="/features" onClick={handleClick}>
              <li className="px-4 py-2 my-3">Features</li>
            </Link>
            <Link to="/resources" onClick={handleClick}>
              <li className="px-4 py-2 my-3 flex items-center">
                <span className="inline-block mr-2">Resources</span>{" "}
                <img src={arrdown} alt="" />
              </li>
            </Link>
            <Link to="/pricing" onClick={handleClick}>
              <li className="px-4 py-2 my-3">Pricing</li>
            </Link>
            <Link to="/login" onClick={handleClick}>
              <li className="px-4 py-3 mt-4 mb-8 border-2 border-slate-400 text-slate-700 font-bold rounded-lg ">
                Log in
              </li>
            </Link>
            <Link to="/signup" onClick={handleClick}>
              <li className="px-8 py-4 border-slate-400 bg-blue text-white font-bold rounded-lg">
                Get Started
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
