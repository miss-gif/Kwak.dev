import LoginContent from "./Login-content";
import LoginFooter from "./Login-Footer";
import LoginHeader from "./Login-header";

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
