import React from "react";
import d1 from "../assets/d2.jpg";
import d2 from "../assets/d1.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";
import d5 from "../assets/d5.jpg";
import h5 from "../assets/h5.jpg";
import h6 from "../assets/h6.jpg";
import h7 from "../assets/h7.jpg";

const Destinations = () => {
  return (
    <div className=" bg-blue-100 ">
      <div className="  grid grid-cols-2 sm:grid-cols-3 gap-1  sm:gap-3 ml-2 ">
        <img src={d1} alt="" className="h-[487px] sm:h-[653px]  object-cover" />
        <div className="  sm:grid grid-cols-2 sm:gap-3 sm:w-[1000px]">
          <img
            src={d2}
            alt=""
            className="h-[120px ] w-[177px] sm:h-[320px] sm:w-[500px]"
          />
          <img
            src={d3}
            alt=""
            className="h-[120px] w-[175px] sm:h-[320px] sm:w-[500px]"
          />
          <img
            src={d4}
            alt=""
            className="h-[120px] w-[175px] sm:h-[320px] sm:w-[500px]"
          />
          <img
            src={d5}
            alt=""
            className="h-[120px] w-[175px] sm:h-[320px] sm:w-[500px]"
          />
        </div>
      </div>
      <div className=" sm:h-screen pt-16">
        <h1 className="text-3xl italic font-semibold mt-10 ml-2 text-center p-2">
          Offers
        </h1>
        <div className="flex flex-col flex-1 sm:flex-row  gap-5 p-2">
          <img src={h5} className="h-[460px] w-[502px] relative" alt="" />
          <p className="absolute left-[370px] hidden sm:inline mt-[430px] text-slate-100 text-xl  ">
            Offer{" "}
            <span className="text-red-400 font-semibold text-2xl">25% off</span>
          </p>
          <img src={h6} className="h-[460px] w-[490px] relative" alt="" />
          {/* <p className="absolute">offer <span>20% off</span></p> */}
          <p className="absolute left-[880px]  hidden sm:inline mt-[430px] text-slate-50 text-xl  ">
            Offer{" "}
            <span className="text-red-400 font-semibold text-2xl">20% off</span>
          </p>
          <img src={h7} className="h-[460px]  w-[490px] relative" alt="" />
          {/* <p className="absolute">offer <span>30% off</span></p> */}
          <p className="absolute left-[1390px] hidden sm:inline  mt-[430px] text-slate-100 text-xl  ">
            Offer{" "}
            <span className="text-red-400 font-semibold text-2xl">30% off</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
