import  Email from "../components/form/Email";
import Username from "../components/form/Username"
import Password from "../components/form/Pwd";
import SignupBtn from "../components/form/SignupBtn";
import LoginLink from "../components/form/LoginLink";
import Header from "../components/form/Header";
import Error from "../components/form/Error";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm bg-blue-600">
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <form>
       <Header />
       <Error />
       <Username />
       <Email />
       <Password />
       <SignupBtn />
       <LoginLink />
      </form>
    </div>
  </div>
  </main>
  );
};

export default page;
