import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IsLogout = () => {
  return (
    <div className="flex gap-1">
      <Button variant="link">
        <Link to={"/login"}>로그인</Link>
      </Button>
    </div>
  );
};

export default IsLogout;
