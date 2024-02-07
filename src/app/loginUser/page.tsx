import Link from "next/link";
import  Email from "../components/form/Email";
import Error from "../components/form/Error";
import LoginPwd from "../components/form/LoginPwd";
import LogincheckBox from "../components/form/LogincheckBox";
import LoginBtn from "../components/form/LoginBtn";
import ForgetAndlink from '../components/form/ForgetAndlink';
import LoginHeader from "../components/form/LoginHeader";


const loginUser = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm bg-blue-600">
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <form>
        <LoginHeader />
        <Error />
        <Email />
        <LoginPwd  />
        <LogincheckBox />
        <LoginBtn />
        <ForgetAndlink />
      </form>
    </div>
  </div>
  </main>
  );
};

export default loginUser;
