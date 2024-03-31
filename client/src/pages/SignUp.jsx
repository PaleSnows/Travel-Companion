import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return
      }
      setLoading(false);
      setError(null);
     
      //  console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  console.log(input);
  return (
    <>
      <div className="text-center flex flex-col my-[80px] ">
        <h1 className="font-semibold text-3xl">Sign up</h1>
        <form
          onSubmit={formHandler}
          className="flex items-center flex-col mt-2"
        >
          <input
            type="text"
            name=""
            id="username"
            placeholder="Username"
            className="p-4 rounded-md m-2 bg-slate-200 w-[500px]"
            onChange={changeHandler}
          />
          <input
            type="email"
            name=""
            id="email"
            placeholder="email"
            className="p-4 rounded-md m-2 bg-slate-200 w-[500px]"
            onChange={changeHandler}
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="password"
            className="p-4 rounded-md m-2 bg-slate-200 w-[500px]"
            onChange={changeHandler}
          />
          <button className="bg-slate-800 text-slate-50 rounded-lg p-4 w-[500px] mt-2  text-lg font-semibold">
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
