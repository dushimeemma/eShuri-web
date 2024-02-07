import Link from "next/link";
import React from "react";

function ForgetAndlink() {
  return (
    <div className="text-start">
    <a href="#" className="text-blue-500 hover:underline text-sm">
      Forgot password?
    </a> <br />
    <Link href="./createUser" className="text-blue-500 hover:underline text-sm">
    Don't Have An Account? Sign Up
  </Link>
  </div>
  );
}

export default ForgetAndlink;
