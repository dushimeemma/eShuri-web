import Link from "next/link";

const LoginLink = () => {
  return (
    <div className="text-start">
    <Link href="./loginUser" className="text-blue-500 hover:underline text-sm">
      Already Have An Account? Log-in
    </Link>
  </div>
  );
};

export default LoginLink;
