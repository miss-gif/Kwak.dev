import { useNavigate } from "react-router-dom";
import PageLayout from "./components/common/PageLayout";
import SectionWrapper from "./components/common/SectionWrapper";
import { useAuthStore } from "./components/stores/authStore";
import useAllPosts from "./hooks/postbody/useAllPosts";
import { formatDate } from "./utils/formatDate";

const Test = () => {
  const { posts, isLoading, error } = useAllPosts(); // 게시물 상태 및 데이터 가져오기
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error?.message}</p>;

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="w-full">
          <div className="sticky top-20 mb-4 flex items-center justify-between rounded-lg border-2 border-blue-300 bg-white px-2 py-4">
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={() =>
                !user ? alert("로그인이 필요합니다.") : navigate("/test/write")
              }
            >
              글쓰기
            </button>
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="h-10 border-b-2 bg-gray-700 text-center font-semibold text-white">
                <th>제목</th>
                <th>작성자</th>
                <th>추천</th>
                <th>비추천</th>
                <th>조회</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post) => (
                <tr
                  key={post.postId}
                  className="h-10 cursor-pointer border-b hover:bg-orange-200"
                  onClick={() => navigate(`/test/${post.postId}`)}
                >
                  <td className="px-4">{post.title}</td>
                  <td>{post.author}</td>
                  <td className="text-center text-blue-500">{post.likes}</td>
                  <td className="text-center text-red-500">{post.dislikes}</td>
                  <td className="text-center">{post.views}</td>
                  <td className="text-center text-xs">
                    {formatDate(post.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default Test;
