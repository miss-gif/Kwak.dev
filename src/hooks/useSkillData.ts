import { fetchSkillsData } from "@/api/skillApi";
import { useQuery } from "@tanstack/react-query";

interface SkillData {
  img: string;
  id: number;
  name: string;
  percentage: number;
  description: string[];
}

const useSkillData = () => {
  const {
    data: skills,
    error,
    isLoading,
  } = useQuery<SkillData[], Error>({
    queryKey: ["skills"],
    queryFn: fetchSkillsData,
  });
  return { skills, error, isLoading };
};

export default useSkillData;
