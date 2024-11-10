import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useAuthStore } from "@/components/stores/authStore";
import { db } from "@/firebaseConfig";
import Post from "@/types/post";
import { handleDislike, handleLike } from "@/utils/utils";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;

      try {
        const postRef = doc(db, "posts", postId);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
          const postData = postSnap.data() as Post;
          setPost(postData);

          // 조회수 증가
          await updateDoc(postRef, { views: (postData.views || 0) + 1 });
        } else {
          console.error("게시글을 찾을 수 없습니다.");
          navigate("/not-found");
        }
      } catch (error) {
        console.error("게시글을 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, navigate]);

  if (loading) {
    return <div className="mt-8 text-center">로딩 중...</div>;
  }

  if (!post) {
    return (
      <div className="mt-8 text-center text-red-500">
        게시글을 찾을 수 없습니다.
      </div>
    );
  }

  const handleEdit = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (post.author !== user.email) {
      alert("게시글 작성자만 수정할 수 있습니다.");
      return;
    }
    navigate(`/post/${postId}/edit`);
  };

  const handleDelete = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (post.author !== user.email) {
      alert("게시글 작성자만 수정할 수 있습니다.");
      return;
    }
    if (window.confirm("정말 삭제하시겠습니까?")) {
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
        <div className="flex flex-col items-center justify-center">
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
          <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">댓글</h2>
            <div className="space-y-4">
              {/* {comments.map((comment) => (
                <div key={comment.id} className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {comment.author}
                    </span>
                    <span className="text-xs text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                </div>
              ))} */}
              댓글
            </div>

            {/* 댓글 입력 폼 */}
            <div className="mt-6">
              <textarea
                placeholder="댓글을 남기세요..."
                className="w-full rounded-md border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                // rows="3"
                // value={newComment}
                // onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="mt-4 flex justify-end">
                <button
                  // onClick={handleCommentSubmit}
                  className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
                >
                  댓글 작성
                </button>
              </div>
            </div>
          </div>

          {/* 버튼들 */}
          <button
            onClick={() => navigate(-1)}
            className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            목록
          </button>
          <button
            onClick={handleEdit}
            className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            삭제
          </button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default PostDetailPage;
