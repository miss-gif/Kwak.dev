import { Link } from "react-router-dom";

const SignupFooter = () => {
  return (
    <p className="text-center text-sm text-gray-600">
      이미 계정이 있으신가요?
      <Link to="/auth/login" className="text-blue-500 hover:underline">
        로그인
      </Link>
    </p>
  );
};

export default SignupFooter;
