import React from "react";

const Profile = () => {
  return (
      <div className="text-center h-screen bg-blue-100 flex justify-center ">
      <form className="mt-20">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
        <div className="flex flex-col w-[450px] gap-5 text-white ">
          <input className="bg-slate-600 p-4 mb-2 rounded-md " type="text" placeholder="Username..." />
          <input className="bg-slate-600 p-4 mb-2 rounded-md" type="email" placeholder="Email" />
          <input className="bg-slate-600 p-4 rounded-md" type="password" placeholder="Password"/>
          <button className="mt-2 p-4 bg-slate-900 rounded-md">Update</button>
        </div>
        <p>Sign In</p>
      </form>
    </div>
  );
};

export default Profile;
