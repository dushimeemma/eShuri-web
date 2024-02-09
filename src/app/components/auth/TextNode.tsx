import Link from "next/link";
import React from "react";
interface inputProps {
    nodeText: string;
    type:string;
    checkClass: string; 
    className?: string;
    btnName: string;
    forgetPwd: string;
    log: string;
    href: string;
}
const TextNode = ({ nodeText, type, checkClass, btnName, forgetPwd, log, className, href}: inputProps) => {
  return(
    <div>
      <div className="mb-4">
          <label className={`flex items-center ${className}`}>
            <input 
              type={type}
              className={checkClass}
             />
            <span 
              className = {`text-gray-500 ${className}`}>
              {nodeText}
            </span>
      </label>
    </div>
     <div className="grid grid-cols-1 items-start justify-center">
     <div className="mb-2">
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 sm:mb-0 sm:mr-4 sm:text-start ${className}`}
            type="button"
          >
           { btnName }
          </button>
     </div>
     <div className="mb-2 capitalize ">
        <a 
             className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ${className}`}
             href="#">
            {forgetPwd }
          </a>
     </div>
     <div className="mb-2 capitalize">
          <Link 
              href={href} 
              className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800  ${className }`}>
              { log }
          </Link>
     </div>
    </div>
    </div>

  );
};

export default TextNode;
