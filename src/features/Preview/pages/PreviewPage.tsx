import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Preview from "../components";

const PreviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        className="fixed right-0 top-0 z-50 m-5 border border-gray-500 text-xs"
        onClick={() => {
          navigate(-1);
        }}
      >
        종료
      </Button>
      <Preview />
    </>
  );
};

export default PreviewPage;
