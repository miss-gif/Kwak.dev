import { useQuery } from "@tanstack/react-query";
import usePoints from "./use-Points";

// 사용자 포인트 조회 쿼리 훅
const useUserPointsQuery = (userId: string) => {
  const { getUserPoints } = usePoints();

  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserPoints(userId),
    staleTime: 5 * 60 * 1000, // 5분간 데이터를 신선하다고 간주
    gcTime: 10 * 60 * 1000, // 10분간 캐시 유지 v4에서는 cacheTime으로 변경
    retry: 2, // 실패 시 2번 재시도
    enabled: !!userId, // userId가 있을 때만 실행
  });
};

export default useUserPointsQuery;
