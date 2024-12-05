import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <p className="text-center text-sm text-gray-600">
      계정이 없으신가요?
      <Link to="/auth/signup" className="text-blue-500 hover:underline">
        회원가입
      </Link>
    </p>
  );
};

export default LoginFooter;
