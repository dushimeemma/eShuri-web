import React from "react";
interface inputProps {
    nodeText: string;
}
const Checkbox = (props: inputProps) => {
  return(
    <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" />
            <span className="text-gray-500">{props.nodeText}</span>
          </label>
        </div>
  );
};

export default Checkbox;
