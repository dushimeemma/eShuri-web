import TextField from "@/app/components/auth/TextField";
import Header from "../../components/auth/Header";
import TextNode from "../../components/auth/TextNode";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col bg-blue-600 items-center justify-center p-2 sm:p-5">
      <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-full sm:max-w-md">
          <Header name="eShuri" subTitle="Mentor Sign Up"/>
          <TextField label="First name" htmlFor="first-name" type="text" placeholder="Type your first name" onChange={undefined} />
          <TextField label="Email" htmlFor="Email" type="email" placeholder="Type your email" onChange={undefined} />
          <TextField label="Last name" htmlFor="Last name" type="text" placeholder="Type your last name" onChange={undefined} />
          <TextField label="Password" htmlFor="Password" type="Password" placeholder="Type your Password" onChange={undefined} />
          <TextNode type="button" btnName="Sign Up" log="Alredy Have An account? Log-in" href={"./Login"} nodeText={""} checkClass={""} forgetPwd={""}/>
        </form>
      </main>
  );
};

export default Login;
