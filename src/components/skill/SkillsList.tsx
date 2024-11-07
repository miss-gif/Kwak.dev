import { fetchSkillsData } from "@/api/skillApi";
import { useQuery } from "@tanstack/react-query";
import SkillCard from "./SkillCard";

interface SkillData {
  img: string;
  id: number;
  name: string;
  percentage: number;
  description: string[];
}

const SkillsList = () => {
  const {
    data: skills,
    error,
    isLoading,
  } = useQuery<SkillData[], Error>({
    queryKey: ["skills"],
    queryFn: fetchSkillsData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading skills data: {error.message}</div>;

  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {skills?.map(({ img, name, percentage, description, id }) => (
          <SkillCard
            key={id}
            img={img}
            name={name}
            percentage={percentage}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
