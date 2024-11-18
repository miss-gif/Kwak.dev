import CommentList from "@/components/board/CommentList";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import useGetPosts from "@/hooks/postbody/useGetPosts";
import { handleDislike, handleLike } from "@/utils/utils";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "./components/stores/authStore";
import StickyWrapper from "./components/common/StickyWrapper";

const TestDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();
  if (!postId) return <p>No postId found</p>;
  const { post, isLoading, error } = useGetPosts(postId);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <p>No post found</p>;

  // 로그인 및 작성자 확인
  const validateUser = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return false;
    }
    if (post?.author !== user.email) {
      alert("게시글 작성자만 수정할 수 있습니다.");
      return false;
    }
    return true;
  };

  const handleEdit = () => {
    if (validateUser()) {
      navigate(`/post/${postId}/edit`);
    }
  };

  const handleDelete = () => {
    if (validateUser() && window.confirm("정말 삭제하시겠습니까?")) {
      // 삭제 로직
      console.log("삭제 로직");
    }
  };

  const formattedDate = post.createdAt
    ? post.createdAt instanceof Date
      ? post.createdAt.toLocaleDateString()
      : post.createdAt.toDate().toLocaleDateString()
    : "";

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="flex flex-col">
          {/* 버튼들 */}
          <StickyWrapper>
            <button
              onClick={() => navigate(-1)}
              className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              목록
            </button>
            {post?.author !== user?.email ? null : (
              <div className="flex gap-2">
                <button
                  onClick={handleEdit}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                  수정
                </button>
                <button
                  onClick={handleDelete}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                  삭제
                </button>
              </div>
            )}
          </StickyWrapper>

          {/* 게시글 내용 */}
          <div className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              {post.title}
            </h1>
            <div className="mb-6 text-sm text-gray-500">
              <span>작성자: {post.author}</span> | {formattedDate}
              <span className="ml-2 flex items-center text-gray-700">
                <VisibilityIcon className="mr-1" /> {post.views} views
              </span>
            </div>
            <div className="mb-6 whitespace-pre-wrap text-gray-700">
              {post.content}
            </div>
            <div className="mt-4 flex items-center space-x-6">
              <div
                className="flex cursor-pointer items-center text-gray-600"
                onClick={() => postId && handleLike(postId)}
              >
                <ThumbUpIcon className="mr-1 text-blue-500" />
                <span>{post.likes}</span>
              </div>
              <div
                className="flex cursor-pointer items-center text-gray-600"
                onClick={() => postId && handleDislike(postId)}
              >
                <ThumbDownIcon className="mr-1 text-red-500" />
                <span>{post.dislikes}</span>
              </div>
            </div>
          </div>

          {/* 댓글 영역 */}
          <CommentList />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default TestDetailPage;
