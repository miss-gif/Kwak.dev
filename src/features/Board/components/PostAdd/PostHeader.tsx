import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostHeader = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (confirm("작성을 취소하시겠습니까?")) {
      navigate("/board");
      toast.error("작성이 취소되었습니다.");
    } else {
      return;
    }
  };

  return (
    <div className="mb-3 flex items-center justify-between border-b border-inherit py-3">
      <h3 className="text-left text-2xl font-semibold">새 글 작성</h3>
      <div className="flex gap-2">
        <Button label="취소" onClick={handleCancel} color="red" />
      </div>
    </div>
  );
};

export default PostHeader;
