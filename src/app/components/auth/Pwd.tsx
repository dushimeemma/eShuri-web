import React from "react";
interface inputProps {
    labelName: string;
}
const Pwd = (props: inputProps) => {
  return(
    <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
           {props.labelName}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
  );
};

export default Pwd;
