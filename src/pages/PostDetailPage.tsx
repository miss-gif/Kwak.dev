import CommentList from "@/components/board/CommentList";
import ToEditPost from "@/components/board/ToEditPost";
import UpDownButton from "@/components/board/UpDownButton";
import UrlCopyButton from "@/components/board/UrlCopyButton";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import ToBackButton from "@/components/common/ToBackButton";
import { useAuthStore } from "@/components/stores/authStore";
import { db } from "@/firebaseConfig";
import useGetPosts from "@/hooks/postbody/useGetPosts";
import { handleDislike, handleLike } from "@/utils/utils";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PostDetailPage = () => {
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

  const handleDelete = async (postId: string, user: any, navigate: any) => {
    const validateUser = () => {
      // 사용자 검증 로직 (예: 게시글 작성자 확인)
      return user && user.email; // 작성자 권한 확인
    };

    if (!validateUser()) {
      toast.error("삭제 권한이 없습니다.");
      return;
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        // Firestore에서 해당 게시글 삭제
        const postRef = doc(db, "posts", postId);
        await deleteDoc(postRef);
        toast.success("게시글이 성공적으로 삭제되었습니다.");
        navigate("/board");
      } catch (error) {
        console.error("삭제 실패:", error);
        toast.error("게시글 삭제에 실패했습니다.");
      }
    }
  };

  const formattedDate = post.createdAt
    ? post.createdAt instanceof Date
      ? post.createdAt.toLocaleDateString()
      : post.createdAt.toDate().toLocaleDateString()
    : "";

  // TODO : 조회수 증가 기능 필요

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="flex flex-col">
          {/* 버튼들 */}
          <div className="sticky top-20 mb-4 flex w-full items-center justify-between rounded-lg border-2 border-blue-300 bg-white px-2 py-4">
            <ToBackButton title="목록" />
            {post?.author !== user?.email ? null : (
              <div className="flex gap-2">
                <ToEditPost onEdit={handleEdit} />
                <button
                  onClick={() => {
                    handleDelete(postId, user, navigate);
                  }}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                  삭제
                </button>
              </div>
            )}
          </div>

          {/* 게시글 내용 */}
          <div className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-3xl font-bold text-gray-800">
              {post.title}
            </h3>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">{post.author}</span>
                <div className="flex gap-2 text-gray-500">
                  <span>{formattedDate}</span>
                  <span className="flex items-center">조회 {post.views}</span>
                </div>
              </div>
              <UrlCopyButton />
            </div>

            {/* 내용 */}
            <div className="mb-6 whitespace-pre-wrap text-gray-700">
              {post.content}
            </div>
            {/* 추천 비추천 */}
            <div className="flex items-center justify-center gap-6 pb-10 pt-20">
              <UpDownButton
                postId={postId}
                onClick={handleLike}
                post={post}
                rule={"likes"}
              >
                <ThumbUpIcon className="mr-1 text-blue-500" />
              </UpDownButton>
              <UpDownButton
                postId={postId}
                onClick={handleDislike}
                post={post}
                rule={"dislikes"}
              >
                <ThumbDownIcon className="mr-1 text-red-500" />
              </UpDownButton>
            </div>
          </div>

          {/* 댓글 영역 */}
          <CommentList />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default PostDetailPage;
