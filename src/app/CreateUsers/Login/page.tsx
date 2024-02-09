import Header from "../../components/auth/Header";
import LoginBtnAndForgetPwd from "../../components/auth/LoginBtnAndForgetPwd";
import Pwd from "../../components/auth/Pwd";
import Checkbox from "../../components/auth/Checkbox";
import Firstname from "../../components/auth/Firstname";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 items-center justify-center p-4 sm:p-5">
      <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-full sm:max-w-md">
          <Header name="eShuri" subTitle="Mentor Login"/>
          <Firstname labelName="first name"/>
          <Pwd labelName="Password"/>
          <Checkbox nodeText="Keep me logged in" />
          <LoginBtnAndForgetPwd btnName="Login" forgetPwd="Forget Password?" log="Don't have an account! Log-in"/>
        </form>
      </main>
  );
};

export default Login;
