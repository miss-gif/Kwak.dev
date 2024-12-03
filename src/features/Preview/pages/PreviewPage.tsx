import { Button } from "@/components/ui/button";
import Preview from "../components";
import { Link } from "react-router-dom";

const PreviewPage = () => {
  return (
    <div>
      <Button asChild>
        <Link to="/" className="fixed right-0 top-0 z-50 m-5 border border-gray-500 text-xs">
          종료
        </Link>
      </Button>
      <Preview />
    </div>
  );
};

export default PreviewPage;
