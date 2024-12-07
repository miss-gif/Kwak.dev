import SanitizedContent from "@/components/Quill/SanitizedContent";
import UpDownButton from "@/features/Board/components/UpDownButton";
import UrlCopyButton from "@/features/Board/components/UrlCopyButton";
import { formatDate } from "@/utils/formatDate";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import usePostDetail from "../../hooks/use-PostDetail";
import { PostData } from "../../types/type";

interface PostDetailProps {
  post: PostData;
  postId: string;
}

const PostDetail = ({ post, postId }: PostDetailProps) => {
  const { views, error, handleLike, handleDislike } = usePostDetail({
    post,
    postId,
  });

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-6">
      <h3 className="mb-4 text-3xl font-bold text-gray-800">{post.title}</h3>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{post.author}</span>
          <div className="flex gap-2 text-gray-500">
            <span>{formatDate(post.createdAt)}</span>
            <span className="flex items-center">조회 {views}</span>
          </div>
        </div>
        <UrlCopyButton />
      </div>

      <SanitizedContent content={post.content} />

      <div className="flex items-center justify-center gap-6 pb-10 pt-20">
        <UpDownButton
          postId={postId}
          onClick={() => {
            handleLike(postId, post.uid);
          }}
          post={post}
          rule={"likes"}
        >
          <ThumbUpIcon className="mr-1 text-blue-500" />
        </UpDownButton>
        <UpDownButton
          postId={postId}
          onClick={() => {
            handleDislike(postId, post.uid);
          }}
          post={post}
          rule={"dislikes"}
        >
          <ThumbDownIcon className="mr-1 text-red-500" />
        </UpDownButton>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PostDetail;
