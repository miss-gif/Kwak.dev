import { useEffect } from "react";

// 페이지가 렌더링 될 때, 스크롤 최상단으로 이동
const useScrollTo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollTo;
