import React, { useState } from "react";
import {} from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signoutUserFailure,
  signoutUserStart,
  signoutUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const deleteHandler = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const signoutHandler = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
      }
      dispatch(signoutUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signoutUserFailure(error.message));
    }
  };

  return (
    <div className="text-center h-screen bg-blue-100 flex justify-center ">
      <form onSubmit={formHandler} className="mt-20">
        <h1 className="text-3xl font-semibold mb-4">Profile</h1>
        <div className="flex flex-col w-[450px] gap-5 text-white ">
          <input
            className="bg-slate-600 p-4 mb-2 rounded-md "
            type="text"
            id="username"
            onChange={changeHandler}
            placeholder="Username..."
            defaultValue={currentUser.username}
          />
          <input
            className="bg-slate-600 p-4 mb-2 rounded-md"
            type="email"
            id="email"
            onChange={changeHandler}
            placeholder="Email"
            defaultValue={currentUser.email}
          />
          <input
            className="bg-slate-600 p-4 rounded-md"
            type="password"
            id="password"
            onChange={changeHandler}
            placeholder="Password"
          />
          <button className="mt-2 p-4 bg-slate-900 rounded-md">Update</button>
          <div className="flex gap-4 flex-row cursor-pointer">
            <button
              onClick={deleteHandler}
              className="bg-red-400 p-4 w-[225px] rounded-md text-slate-100"
            >
              Delete
            </button>
            <button
              to={"/sign-in"}
              className="bg-blue-400 p-4 w-[225px] rounded-md text-slate-800"
              onClick={signoutHandler}
            >
              Sign Out
            </button>
          </div>
        </div>
        {loading ? "loading..." : ""}
        {error ? <p className="text-red-500">{error}</p> : ""}
        {updateSuccess ? (
          <p className="text-green-600 font-semibold p-2">User updated successfully!!!</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Profile;
