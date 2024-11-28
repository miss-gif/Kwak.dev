import { deletePost } from "@/api/postApi";
import Button, { LinkButton } from "@/components/Button";
import StickyWrapper from "@/components/common/StickyWrapper";
import { useAuthStore } from "@/stores/authStore";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PostData } from "../../types/type";

interface PostDetailHeaderProps {
  post: PostData;
  postId: string;
}

const PostDetailHeader = ({ post, postId }: PostDetailHeaderProps) => {
  const { user } = useAuthStore();

  return (
    <StickyWrapper>
      <LinkButton label={<ArrowBackIosNewIcon />} to="/board" />
      {post.uid !== user?.uid ? null : (
        <div className="flex gap-2">
          <LinkButton label="수정" to="edit" />
          <Button
            label="삭제"
            onClick={() => {
              deletePost(postId);
            }}
            color="red"
          />
        </div>
      )}
    </StickyWrapper>
  );
};

export default PostDetailHeader;
