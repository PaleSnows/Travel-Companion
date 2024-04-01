import React from "react";
import h1 from "../assets/travel.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";


const Home = () => {
  return (
    <div className=" bg-blue-100 h-full">
      <div className=" h-screen bg-blue-100">
        <h1 className="absolute text-white text-2xl m-40 font-semibold italic">
          Welcome To Travel Companion,
          <br />
          where you will find the best partner to guide your jorney
        </h1>
        <img src={h1} alt="" className="h-screen w-full object-cover" />
      </div>
      <div className=" py-10 px-5">
        <h1 className="text-3xl mt-8 l-10  font-semibold py-3 px-1 italic text-blue-600 inline-block sm:absolute ">
          Scenic Spots
        </h1>
        <div className="   p-10  rounded-lg bg-blue-100 shadow-lg">
          <p className="text-lg p-3 font-semibold text-center">
            Check out, some of our best recommended places to travel
          </p>
          <div className="grid sm:grid-cols-2 grid-flow-row sm:grid-rows-1 sm:grid-flow-col gap-8 ">
            <img
              className="h-[350px] rounded-md w-[400px] object-cover  hover:scale-105 transition-scale duration-300 shadow-2xl"
              src={h2}
              alt=""
            />
            <img
              className="h-[350px] rounded-md w-[400px] object-cover hover:scale-105 transition-scale duration-300 shadow-2xl"
              src={h3}
              alt=""
            />
            <img
              className="h-[350px] rounded-md w-[400px] object-cover hover:scale-105 transition-scale duration-300 shadow-2xl "
              src={h4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
