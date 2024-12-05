import SignupContent from "./Signup-Content";
import SignupFooter from "./Signup-Footer";
import SignupHeader from "./Signup-Header";

const Signup = () => {
  return (
    <div className="flex h-[600px] w-full max-w-md flex-col gap-5 p-8">
      <SignupHeader />

      <SignupContent />

      <SignupFooter />
    </div>
  );
};

export default Signup;
