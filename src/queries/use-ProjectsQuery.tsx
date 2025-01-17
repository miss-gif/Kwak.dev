import { getProjects } from "@/apis/project";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback } from "react";

const useProjectsQuery = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => getProjects(pageParam),
    getNextPageParam: (lastPage) => lastPage.lastVisible,
    initialPageParam: null as any, // 타입 단언 추가
  });

  const loadMore = useCallback(() => {
    // 다음 페이지가 없거나 데이터를 가져오는 중이라면 더 이상 데이터를 가져오지 않음
    if (!hasNextPage || isFetching) {
      return;
    }
    // 다음 페이지 데이터를 가져옴
    fetchNextPage();
  }, [hasNextPage, isFetching, fetchNextPage]); // fetchNextPage가 변경될 때만 함수가 재생성되도록 함

  const projects = data?.pages.flatMap((page) => page.projects) ?? [];

  return {
    data: projects,
    loadMore,
    hasNextPage,
    isFetching,
  };
};

export default useProjectsQuery;
