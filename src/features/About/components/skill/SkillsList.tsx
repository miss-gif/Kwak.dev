import useSkillData from "@/hooks/useSkillData";
import SkillCard from "./SkillCard";

const SkillsList = () => {
  const { skills, error, isLoading } = useSkillData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading skills data: {error.message}</div>;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
