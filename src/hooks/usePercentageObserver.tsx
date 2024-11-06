import { useEffect, useRef, useState } from "react";

const usePercentageObserver = (
  targetPercentage: number,
  delay: number = 20,
) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const elementRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
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
        setCurrentPercentage(0);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetPercentage, delay]);

  return { currentPercentage, elementRef };
};

export default usePercentageObserver;
