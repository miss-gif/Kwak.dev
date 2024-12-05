import SignupContent from "./Signup-Content";
import SignupFooter from "./Signup-Footer";
import SignupHeader from "./Signup-Header";

const Signup = () => {
  return (
    <div className="w-full max-w-md space-y-6 rounded-md bg-white p-8">
      <SignupHeader />

      <SignupContent />

      <SignupFooter />
    </div>
  );
};

export default Signup;
