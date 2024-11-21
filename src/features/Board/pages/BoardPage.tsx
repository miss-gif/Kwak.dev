import ToAddPost from "@/features/Board/components/ToAddPost";
import PostTable from "@/features/Board/components/PostTable";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import useFetchPosts from "@/hooks/useFetchPosts";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import StickyWrapper from "@/components/common/StickyWrapper";

const BoardPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const pageSize = 20;

  const { posts, error, loading, hasMore, fetchMorePosts } = useFetchPosts(
    searchTerm,
    pageSize,
  );

  const { inView, ref } = useInView({ threshold: 1 });

  /**
   * 1. searchParams.get("search")로 현재 URL의 search 파라미터 값을 가져옵니다.
   * 2. 현재 URL의 search 파라미터 값이 searchTerm과 다르다면 setSearchParams({ search: searchTerm })로 URL을 업데이트합니다.
   * 3. searchTerm, searchParams를 의존성 배열로 설정하여 searchTerm가 변경될 때마다 useEffect가 실행되도록 합니다.
   * 4. useEffect 내부에서 현재 URL의 search 파라미터 값을 가져와 currentSearch에 저장합니다.
   * 5. currentSearch와 searchTerm이 다르다면 setSearchParams({ search: searchTerm })로 URL을 업데이트합니다.
   * 6. 이렇게 하면 searchTerm이 변경될 때마다 URL이 업데이트되어 URL 파라미터와 searchTerm이 동기화됩니다.
   *
   */
  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    if (currentSearch !== searchTerm) {
      setSearchParams({ search: searchTerm });
    }
  }, [searchTerm, searchParams, setSearchParams]);

  /**
   * fetchMorePosts는 현재 검색어와 페이지 크기를 기반으로 추가 게시물을 불러오는 함수입니다.
   */
  useEffect(() => {
    if (inView && hasMore && !loading) {
      fetchMorePosts();
    }
  }, [inView, hasMore, loading, fetchMorePosts]);

  // 검색
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchTerm.trim());
  };

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="min-h-[40vh] w-full">
          <StickyWrapper>
            <ToAddPost />
            <form onSubmit={handleSearch} className="flex w-1/2 gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-style flex-1"
                placeholder="제목으로 검색"
              />
            </form>
          </StickyWrapper>

          <PostTable posts={posts} />

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!hasMore && !loading && (
            <p className="mt-4 text-gray-500">더 이상 게시물이 없습니다.</p>
          )}
          <div ref={ref}></div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
