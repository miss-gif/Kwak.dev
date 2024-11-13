import axios from "axios";

interface SkillData {
  img: string;
  id: number;
  name: string;
  percentage: number;
  description: string[];
}

export const fetchSkillsData = async (): Promise<SkillData[]> => {
  const response = await axios.get("/json/skillsData.json");
  return response.data;
};
