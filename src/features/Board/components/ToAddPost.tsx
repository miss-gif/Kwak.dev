import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";
import { toast } from "react-toastify";

const ToAddPost = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      <button
        className="shrink-0 rounded-md bg-blue-500 px-2 py-2 text-white hover:bg-blue-600"
        onClick={() =>
          user ? navigate("/post/write") : toast.warning("로그인이 필요합니다.")
        }
      >
        글쓰기
      </button>
    </>
  );
};

export default ToAddPost;
