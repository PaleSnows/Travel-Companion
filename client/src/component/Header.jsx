import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center bg-blue-100 h-[80px]">
      <div className="text-3xl italic">Travel <span className="text-blue-700 not-italic">Companion</span></div>
      <div className="flex flex-row gap-4">
        <Link to={'/'}>
          <h1 className="text-lg font-semibold text-center text-slate-800">Home</h1>
        </Link>
        <Link to={'/about'}>
          <h1 className="text-lg font-semibold text-center text-slate-800">About</h1>
        </Link>
        <Link to={'/destinations'}>
          <h1 className="text-lg font-semibold text-center text-slate-800">Destinations</h1>
        </Link>
      </div>
      <div className="">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
