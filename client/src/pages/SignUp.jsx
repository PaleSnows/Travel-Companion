import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="text-center flex flex-col mt-[100px] h-screen">
        <h1 className="font-semibold text-3xl">Sign up</h1>
        <form className="flex items-center flex-col mt-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="p-4 rounded-md m-2 bg-slate-200 w-[500px]"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            className="p-4 rounded-md m-2 bg-slate-200 w-[500px]"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            className="p-4 rounded-md m-2 bg-slate-200 w-[500px]"
          />
          <button className="bg-green-400 rounded-lg p-4 w-[500px] mt-2 text-slate-700 text-lg font-semibold">
            Submit
          </button>
        </form>
        <div className="flex justify-center gap-1 mt-3">
          <p className="font-semibold text-lg">Have an account?</p>
          <Link className="text-red-400 text-lg font-bold">Sign in</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
