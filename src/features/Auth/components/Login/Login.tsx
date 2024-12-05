import LoginContent from "./Login-Content";
import LoginFooter from "./Login-Footer";
import LoginHeader from "./Login-Header";
import LoginOther from "./Login-Other";

const Login = () => {
  return (
    <div className="flex h-[600px] w-full max-w-md flex-col gap-5 p-8">
      <LoginHeader />

      <LoginContent />

      <LoginOther />

      <LoginFooter />
    </div>
  );
};

export default Login;
