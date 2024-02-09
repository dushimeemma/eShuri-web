import Header from "../../components/auth/Header";
import SignupBtn from "../../components/auth/SignupBtn";
import Pwd from "../../components/auth/Pwd";
import Firstname from "../../components/auth/Firstname";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 items-center justify-center p-2 sm:p-5">
      <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-full sm:max-w-md">
          <Header name="eShuri" subTitle="Mentor Sign Up"/>
          <Firstname labelName="First name"/>
          <Firstname labelName="Last name"/>
          <Pwd labelName="Password"/>
          <Pwd labelName="Confirm Password"/>
          <SignupBtn btnName="Sign Up" log="already Have an account! Log-in"/>
        </form>
      </main>
  );
};

export default Login;
