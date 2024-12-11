import { deletePost } from "@/api/postApi";
import StickyWrapper from "@/components/common/StickyWrapper";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostData } from "../../types/type";

interface PostDetailHeaderProps {
  post: PostData;
  postId: string;
}

const PostDetailHeader = ({ post, postId }: PostDetailHeaderProps) => {
  const { user } = useAuthStore();
  const navigete = useNavigate();

  return (
    <StickyWrapper>
      <div className="flex justify-between">
        <Button size="icon" asChild>
          <Link to="/board">
            <ArrowBackIosNewIcon />
          </Link>
        </Button>

        {post.uid !== user?.uid ? null : (
          <div className="flex gap-2">
            <Button>
              <Link to="edit">수정</Link>
            </Button>

            <Button
              variant="destructive"
              onClick={() => {
                if (!confirm("정말 삭제하시겠습니까?")) return;
                deletePost(postId);
                toast.success("삭제 성공"); // 성공 피드백
                navigete("/board"); // 목록 페이지로 이동
              }}
            >
              삭제
            </Button>
          </div>
        )}
      </div>
    </StickyWrapper>
  );
};

export default PostDetailHeader;
