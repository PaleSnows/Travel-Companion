import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";

const Service = () => {
  return (
    <>
      <div className="sm:h-screen  flex flex-col sm:flex-row justify-center bg-blue-100">
        <div className="mx-[30px] my-[100px]">
          <h1 className="uppercase font-semibold text-3xl">
            Luxury Included vacation for two people
          </h1>
          <p className="text-lg py-4">
            Come and join us in this thrilling chapter that is live,
            <br />
            enjoy what the vast earth has to offer experience ultimate
            satifsaction, fun and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-28 py-12">
            <div className="py-8">
              <RiCustomerService2Fill size={30} className="text-blue-700" />
              <h1 className="text-lg font-semibold">Leading Service</h1>
              <p className="text-lg">
                ALL-INCLUSIVE COMPANY FOR 20
                <br /> YEARS IN-A-ROW
              </p>
            </div>
            <div className="py-8">
              <BsGlobe size={30} className="text-blue-700" />
              <h1 className="text-lg font-semibold"> Leading Service</h1>
              <p className="text-lg">
                ALL-INCLUSIVE COMPANY FOR 20
                <br /> YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
        <div className="my-[50px] p-1">
          <div className="border border-black">
            <div className="p-3 m-1 w-[450px]">
              <h1 className="uppercase text-center">
                Get an additional 10% off{" "}
              </h1>
              <h1 className="text-center uppercase">12 hours left</h1>
            </div>
            <p className="bg-slate-900 text-slate-300 uppercase text-center py-3 px-2">
              Book now and Save
            </p>
          </div>
          <div className="flex flex-col mt-3 gap-3">
            <form action="" className="flex flex-col ">
              <h1>Destination</h1>
              <select name="" className="p-2 rounded-sm mb-4 bg-white" id="">
                <option value="">Nepal</option>
                <option value="">Japan</option>
                <option value="">Australia</option>
                <option value="">China</option>
              </select>
              <h1>Check-In</h1>
              <input className="p-2 mb-4 rounded-md" type="date" />
              <h1>Check-Out</h1>
              <input className="p-2 rounded-md mb-4" type="date" />
            </form>
            <button className="bg-slate-500 rounded p-3 font-semibold text-slate-200">
              Rates & Availiablity
            </button>
          </div>
        </div>
      </div>
      <div className="sm:h-screen pb-[100px] pt-[130px] sm:pt-1 sm:pb-1 bg-blue-100">
        <h1 className="mx-2 sm:mx-[515px] text-lg font-semibold">Contact</h1>
        <p className="mx-2 sm:mx-[505px] sm:p-3 text-lg">
          Submit the form below to contact :)
        </p>
        <div className="flex flex-col gap-3 items-center p-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="w-[420px] sm:w-[500px] p-2"
          />
          <input
            type="Email"
            name=""
            id=""
            className="w-[420px] sm:w-[500px] p-2"
            placeholder="email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-[420px] sm:w-[500px] p-2"
            placeholder="Message"
          ></textarea>
          <button className="p-3 font-semibold bg-slate-500 text-slate-100 w-[150px] rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;
