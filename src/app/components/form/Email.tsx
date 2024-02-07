import React from "react";

const Email = () => {
  return (
    <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className=" bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      placeholder="Enter your email"
    />
  </div>
  );
};

export default Email;
