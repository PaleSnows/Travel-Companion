import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice.js'

const SignIn = () => {
  const [input, setInput] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading,error} = useSelector((state)=>state.user)

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);
    dispatch(signInStart())
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message))
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data))
      navigate("/");

      //  console.log(data);
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      signInFailure(error.message)
    }
  };

  console.log(input);
  return (
    <>
      <div className="text-center flex flex-col pb-[160px] sm:pb-1 sm:h-screen bg-blue-100  pt-[100px] sm:pt-[70px] ">
        <h1 className="font-semibold text-3xl">Sign in</h1>
        <form
          onSubmit={formHandler}
          className="flex items-center flex-col mt-2"
        >
          <input
            type="email"
            name=""
            id="email"
            placeholder="email"
            className="p-4 rounded-md m-2 bg-slate-200 w-[320px] sm:w-[500px]"
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
          <p className="font-semibold text-lg">Dont have an account?</p>
          <Link to={"/sign-up"} className="text-red-400 text-lg font-bold">
            Sign up
          </Link>
        </div>

        {loading ? "Loading..." : ""}
        
      </div>
    </>
  );
};

export default SignIn;
