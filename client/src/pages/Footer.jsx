import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-slate-200 p-4 sm:p-10 ">
      <div className="flex justify-between  sm:mx-[100px] ">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Pages</h1>
          <Link>
            <h1>Home</h1>
          </Link>
          <Link>
            <h1>About</h1>
          </Link>
          <Link>
            <h1>Destinations</h1>
          </Link>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold">Contact Us</h1>
          <h2>9898989898</h2>
          <h2>companion@gmail.com</h2>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold ">Support</h1>
          <div className="flex flex-col sm:flex-row items-center mt-1 gap-3">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
      </div>
      <hr className="mt-5 sm:ml-[85px] " />
      <p className="sm:ml-[85px] py-3">
        @ Travel Companion , All Rights Reserverd
      </p>
    </div>
  );
};

export default Footer;
