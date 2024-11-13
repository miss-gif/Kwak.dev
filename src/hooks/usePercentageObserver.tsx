import { useEffect, useRef, useState } from "react";

/**
 * usePercentageObserver 훅은 특정 요소가 화면에 나타날 때 목표 퍼센티지까지 증가하는 애니메이션을 구현합니다.
 *
 * @param targetPercentage - 목표 퍼센티지
 * @param delay - 퍼센티지가 증가하는 간격 (밀리초)
 * @returns currentPercentage - 현재 퍼센티지 값과 요소의 ref
 */
const usePercentageObserver = (
  targetPercentage: number,
  delay: number = 20,
) => {
  // 현재 퍼센티지 상태를 관리합니다.
  const [currentPercentage, setCurrentPercentage] = useState(0);
  // 관찰할 요소의 ref를 생성합니다.
  const elementRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // IntersectionObserver의 콜백 함수입니다.
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // 요소가 화면에 나타나면 퍼센티지를 증가시키는 interval을 설정합니다.
        const interval = setInterval(() => {
          setCurrentPercentage((prev) => {
            if (prev < targetPercentage) {
              return Math.min(prev + 1, targetPercentage);
            } else {
              clearInterval(interval);
              return targetPercentage;
            }
          });
        }, delay);
      } else {
        // 요소가 화면에서 사라지면 퍼센티지를 0으로 초기화합니다.
        // setCurrentPercentage(0);
      }
    };

    // IntersectionObserver를 생성하고 요소를 관찰합니다.
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    // 요소가 존재하면 관찰을 시작합니다.
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // 컴포넌트가 언마운트될 때 관찰을 중지합니다.
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetPercentage, delay]);

  // 현재 퍼센티지 값과 요소의 ref를 반환합니다.
  return { currentPercentage, elementRef };
};

export default usePercentageObserver;
