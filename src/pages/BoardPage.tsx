import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useAuthStore } from "@/components/stores/authStore";
import useFetchPosts from "@/hooks/useFetchPosts";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BoardPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [pageSize] = useState(10); // 페이지당 문서 수
  const { posts, error, loading, hasMore, fetchMorePosts } = useFetchPosts(
    searchTerm,
    pageSize,
  );
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMorePosts();
  };

  useEffect(() => {
    setSearchParams({ search: searchTerm });
  }, [searchTerm]);

  if (error) {
    return <div>{error}</div>;
  }

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="w-full">
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="mr-2 rounded-md border px-4 py-2"
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              검색
            </button>
          </form>

          {error && <div className="text-red-500">{error}</div>}

          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="h-10 border-b-2 bg-gray-100 text-center font-semibold">
                <th>제목</th>
                <th>작성자</th>
                <th>추천</th>
                <th>비추천</th>
                <th>조회</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.postId}
                  className="h-10 cursor-pointer border-b hover:bg-orange-200"
                  onClick={() => navigate(`/post/${post.postId}`)}
                >
                  <td className="px-4">{post.title}</td>
                  <td>{post.author}</td>
                  <td className="text-center text-blue-500">{post.likes}</td>
                  <td className="text-center text-red-500">{post.dislikes}</td>
                  <td className="text-center">{post.views}</td>
                  <td className="text-center text-xs">
                    {post.createdAt.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {loading ? (
            <p>Loading...</p>
          ) : hasMore ? (
            <button
              onClick={() => fetchMorePosts()}
              className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              더 보기
            </button>
          ) : (
            <p className="mt-4 text-gray-500">더 이상 게시물이 없습니다.</p>
          )}

          <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() =>
              !user ? alert("로그인이 필요합니다.") : navigate("/post/write")
            }
          >
            글쓰기
          </button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
