import { ChangeEventHandler } from "react";
interface inputProps {
  label: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  onChange : ChangeEventHandler<HTMLInputElement> | undefined ;
  classes?: string;
}
const TextField = ({label, htmlFor, type, placeholder, onChange , classes}: inputProps) => {
  return (
    <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor = {htmlFor}>
           {label}
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${classes}`}
            type={type}
            placeholder= {placeholder}
            onChange={onChange}
          />
        </div>
  );
};

export default TextField;
