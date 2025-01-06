import useSkillData from "@/hooks/useSkillData";
import SkillCard from "./SkillCard";

const SkillsList = () => {
  const { skills, error, isLoading } = useSkillData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading skills data: {error.message}</div>;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills?.map((skill) => (
          <SkillCard
            key={skill.id}
            img={skill.img}
            name={skill.name}
            percentage={skill.percentage}
            description={skill.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
