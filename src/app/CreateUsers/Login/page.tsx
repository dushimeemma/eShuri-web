"use client"
import Header from "../../components/auth/Header";
import LoginBtnAndForgetPwd from "../../components/auth/TextNode";
import Checkbox from "../../components/auth/TextNode";
import TextField from "../../components/auth/TextField"
import TextNode from "../../components/auth/TextNode";

const Login = () => {

  return (
    <main className="flex min-h-screen flex-col bg-blue-600 items-center justify-center p-4 sm:p-5">
      <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-full sm:max-w-md">
          <Header name="eShuri" subTitle="Mentor Login"/>
          
           <TextField label="First name" htmlFor="first name" type="email" placeholder="input your email" onChange={()=> {}}  />
           
           <TextField label="Password" htmlFor="password" type="password" placeholder="input your password" onChange={()=> {}} />

           <TextNode type="checkbox" btnName={"Log-in"} nodeText="Keep me logged in" checkClass="form-checkbox mr-2" forgetPwd={"forget Password?"} log={"Don't have an account! Log-in"} href={"../CreateUsers/Signup"}/>
          
        </form>
      </main>
  );
};

export default Login;
