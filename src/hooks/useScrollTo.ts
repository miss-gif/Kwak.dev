import { useEffect } from "react";

const useScrollTo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollTo;
