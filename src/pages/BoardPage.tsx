import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useAuthStore } from "@/components/stores/authStore";
import useFetchPosts from "@/hooks/useFetchPosts";
import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate, useSearchParams } from "react-router-dom";

const BoardPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // URL 파라미터
  const initialSearchTerm = searchParams.get("search") || ""; // 검색어
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm); // 검색어 상태
  const [pageSize] = useState(20); // 페이지당 문서 수
  const { posts, error, loading, hasMore, fetchMorePosts } = useFetchPosts(
    searchTerm,
    pageSize,
  ); // 게시물 상태 및 데이터 가져오기
  const { user } = useAuthStore(); // 사용자 상태
  const navigate = useNavigate();
  const { inView, ref } = useInView({ threshold: 1 }); // 무한 스크롤

  // 검색어가 변경될 때마다 URL 파라미터를 업데이트
  useEffect(() => {
    setSearchParams({ search: searchTerm });
  }, [searchTerm]);

  // 무한 스크롤
  useEffect(() => {
    if (inView && hasMore && !loading) {
      fetchMorePosts();
    }
  }, [inView, hasMore, loading, fetchMorePosts]);

  // 검색어로 게시물을 검색
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMorePosts();
  };

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="w-full">
          <div className="sticky top-20 mb-4 flex items-center justify-between rounded-lg border-2 border-blue-300 bg-white px-2 py-4">
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={() =>
                !user ? alert("로그인이 필요합니다.") : navigate("/post/write")
              }
            >
              글쓰기
            </button>
            <form onSubmit={handleSearch}>
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
              <tr className="h-10 cursor-pointer border-b bg-slate-100 hover:bg-orange-200">
                <td className="px-4">
                  현재 게시판은 작업중입니다. 최대한 빠른 시일 내에 작업을
                  완료하겠습니다.
                </td>
                <td>운영자</td>
                <td className="text-center text-blue-500">1</td>
                <td className="text-center text-red-500">1</td>
                <td className="text-center">1</td>
                <td className="text-center text-xs">{formatDate(Date())}</td>
              </tr>
            </tbody>
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
                    {formatDate(post.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {loading && <p>Loading...</p>}

          {!loading && hasMore && <div ref={ref} className="mt-4 h-1"></div>}

          {!hasMore && !loading && (
            <p className="mt-4 text-gray-500">더 이상 게시물이 없습니다.</p>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
