import logo from "../assets/logo.svg";
import arrdown from "../assets/arrdown.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="px-24 h-[75px] flex items-center justify-between">
      <div className="flex">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center ml-20 font-inter text-slate-500">
          <Link to="/explore">
            <li className="mr-2 px-4">Explore</li>
          </Link>
          <Link to='/features'>
          <li className="mx-2 px-4">Features</li></Link>
          <Link to='/resources'>
          <li className="mx-2 px-4 flex items-center">
            <span className="inline-block mr-2">Resources</span>{" "}
            <img src={arrdown} alt="" />
          </li></Link>
          <Link to='/pricing'>
          <li className="mx-2 px-4">Pricing</li>
          </Link>
        </ul>
      </div>
      <ul className="flex font-inter">
        <Link to='/login'>
        <li className="px-4 py-2 border-2 border-slate-400 text-slate-700 font-bold rounded-lg mr-4">
          Log in
        </li></Link>
        <Link to='/signup'>
        <li className="px-4 py-2 border-slate-400 bg-blue text-white font-bold rounded-lg">
          Get Started
        </li>
        </Link>
      </ul>
    </div>
  );
}
