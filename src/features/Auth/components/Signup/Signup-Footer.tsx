import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupFooter = () => {
  return (
    <p className="text-center text-sm">
      이미 계정이 있으신가요?
      <Button asChild variant="link" className="px-2 text-blue-500">
        <Link to="/auth/login">로그인</Link>
      </Button>
    </p>
  );
};

export default SignupFooter;
