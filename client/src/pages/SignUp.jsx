import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

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
      navigate('/sign-in')
     
      //  console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  console.log(input);
  return (
    <>
      <div className="text-center flex flex-col pb-[160px] sm:pb-1 sm:h-screen bg-blue-100 pt-[100px] sm:pt-[70px] ">
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
            className="p-4 rounded-md m-2 bg-slate-200 w-[320px] sm:w-[500px]"
            onChange={changeHandler}
          />
          <input
            type="email"
            name=""
            id="email"
            placeholder="email"
            className="p-4 rounded-md m-2 bg-slate-200  w-[320px] sm:w-[500px]"
            onChange={changeHandler}
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="password"
            className="p-4 rounded-md m-2 bg-slate-200 w-[320px] sm:w-[500px]"
            onChange={changeHandler}
          />
          <button className="bg-slate-800 text-slate-50 rounded-lg p-4 w-[320px] sm:w-[500px] mt-2  text-lg font-semibold">
            Submit
          </button>
        </form>
        <div className="flex justify-center gap-1 mt-3">
          <p className="font-semibold text-lg">Have an account?</p>
          <Link to={'/sign-in'} className="text-red-400 text-lg font-bold">Sign in</Link>
        </div>
        {loading?"Loading...":""}
        {error&&<p className="text-red-500 p-3">{error}</p>}
      </div>
    </>
  );
};

export default SignUp;
