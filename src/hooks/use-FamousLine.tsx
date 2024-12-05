import { getFamousLine } from "@/api/api-famous-line";
import { useEffect, useState } from "react";

interface FamousLine {
  author: string;
  authorProfile: string;
  message: string;
}

const useFamousLine = () => {
  const [famousLine, setFamousLine] = useState<FamousLine | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFamousLine = async () => {
      try {
        const data = await getFamousLine();
        setFamousLine(data);
      } catch (err) {
        setError("명언을 불러오는 중 오류가 발생했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFamousLine();
  }, []);

  return { famousLine, loading, error };
};

export default useFamousLine;
