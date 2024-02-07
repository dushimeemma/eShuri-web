import React from "react";

const LogincheckBox = () => {
  return (
    <div className="mb-4 flex items-center">
          <input type="checkbox" id="keepLoggedIn" className="checkbox checkbox-sm m-2 "  /> 
          <label htmlFor="keepLoggedIn" className="text-gray-700 text-sm">
            Keep me logged in
          </label>
        </div>
  );
};

export default LogincheckBox;
