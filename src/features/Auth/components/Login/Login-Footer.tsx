import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <p className="text-center text-sm">
      계정이 없으신가요?
      <Button asChild variant="link" className="px-2 text-blue-500">
        <Link to="/auth/signup">회원가입</Link>
      </Button>
    </p>
  );
};

export default LoginFooter;
