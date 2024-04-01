import React from "react";
import SearchBar from "./SearchBar";
import profile from "../assets/prof1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-5 flex justify-between items-center bg-blue-100 h-[80px]">
      <div className="text-3xl italic">
        Travel <span className="text-blue-700 not-italic">Companion</span>
      </div>
      <div className="flex flex-row gap-4">
        <Link to={"/"}>
          <h1 className="text-lg font-semibold text-center text-slate-800">
            Home
          </h1>
        </Link>
        <Link to={"/about"}>
          <h1 className="text-lg font-semibold text-center text-slate-800">
            About
          </h1>
        </Link>
        <Link to={"/destinations"}>
          <h1 className="text-lg font-semibold text-center text-slate-800">
            Destinations
          </h1>
        </Link>
        <Link to={"/service"}>
          <h1 className="text-lg font-semibold text-center text-slate-800">
            Service
          </h1>
        </Link>
      </div>
      <div className="flex gap-3">
        <SearchBar />
        <Link className="mt-1" to={"/profile"}>
          {currentUser ? (
            <img src={profile} className="w-10 rounded-full " alt="" />
          ) : (
            <Link to={"sign-in"}>Sign In</Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
