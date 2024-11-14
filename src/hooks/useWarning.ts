import { useEffect } from "react";

const useWarning = ({ text }: { text: string }) => {
  useEffect(() => {
    alert(text);
  }, []);
};

export default useWarning;
