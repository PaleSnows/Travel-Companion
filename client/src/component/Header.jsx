import React, { useState } from "react";
import SearchBar from "./SearchBar";
import profile from "../assets/prof1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const[navLink,setNavLink] = useState(false)
  const clickHandler = ()=>{
    setNavLink(!navLink)
  }
  return (
    <>
    <div className="p-5 flex justify-between items-center bg-blue-100 h-[80px]">
      <div className="text-xl sm:text-3xl italic">
        <Link to={'/'}>
        Travel <span className="text-blue-700 not-italic">Companion</span>
        </Link>
      </div>
     
      {<div className="hidden sm:flex flex-row gap-4">
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
      </div>}
      <div className=" flex gap-3">
        <SearchBar />
        <Link className="hidden sm:flex mt-1" to={"/profile"}>
          {currentUser ? (
            <img src={profile} className="w-2 sm:w-10 rounded-full " alt="" />
          ) : (
            <Link to={"sign-in"}>Sign In</Link>
          )}
        </Link>
        <div className="flex sticky mt-3 sm:hidden">
        <GiHamburgerMenu onClick={clickHandler}/>
      </div>
      </div>
    </div>
      {navLink && <div className="flex p-3 gap-3 flex-col   bg-blue-100">
        <hr className="bg-slate-800 h-[2px]" />
        <Link className="" to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/destinations'}>Destinations</Link>
        <Link to={'/service'}>Service</Link>
        <Link to={'/sign-up'}>Sign Up</Link>
        </div>}
    </>
  );
};

export default Header;
