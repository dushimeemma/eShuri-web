import React from "react";

const Username = () => {
  return (
    <div className="mb-4">
    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
      Username
    </label>
    <input
      type="text"
      id="username"
      name="username"
      className="bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      placeholder="Enter your username"
    />
  </div>
  );
};

export default Username;
