import "./Skill.css";

import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import axios from "axios";

interface SkillData {
  img: string;
  id: number;
  name: string;
  percentage: number;
  description: string[];
}

const SkillsList = () => {
  const [skills, setSkills] = useState<SkillData[]>([]);

  useEffect(() => {
    const loadSkillsData = async () => {
      try {
        const response = await axios.get("/json/skills.json");
        setSkills(response.data);
      } catch (error) {
        console.error("Error loading skills data:", error);
      }
    };

    loadSkillsData();
  }, []);

  return (
    <section className="skills section">
      <ul className="skills__container container grid">
        {skills.map(({ img, name, percentage, description, id }) => (
          <SkillCard
            key={id}
            img={img}
            name={name}
            percentage={percentage}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default SkillsList;
