import LoginContent from "./Login-Content";
import LoginFooter from "./Login-Footer";
import LoginHeader from "./Login-Header";

const Login = () => {
  return (
    <div className="w-full max-w-md space-y-6 rounded-md bg-white p-8">
      <LoginHeader />

      <LoginContent />

      <LoginFooter />
    </div>
  );
};

export default Login;
