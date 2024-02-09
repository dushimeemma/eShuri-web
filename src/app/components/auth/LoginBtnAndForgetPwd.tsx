import React from "react";
import Link from "next/link";
interface btnAndForget{
    btnName: string;
    forgetPwd: string;
    log: string;
}
const LoginBtnAndForgetPwd = (props: btnAndForget) => {
  return (
    <div className="grid grid-cols-1 items-start justify-center ">
         <div className="mb-2">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 sm:mb-0 sm:mr-4 sm:text-start"
                type="button"
              >
              { props.btnName }
              </button>
         </div>
         <div className="mb-2 capitalize ">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              { props.forgetPwd }
              </a>
         </div>
         <div className="mb-2 capitalize">
              <Link href="./Signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ">
                 { props.log }
              </Link>
         </div>
        </div>
  );
};

export default LoginBtnAndForgetPwd;
