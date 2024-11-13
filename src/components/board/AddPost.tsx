import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const AddPost = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() =>
          user ? navigate("/post/write") : alert("로그인이 필요합니다.")
        }
      >
        글쓰기
      </button>
    </>
  );
};

export default AddPost;
