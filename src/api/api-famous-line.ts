import axios from "axios";

// Get famous line from API
export const getFamousLine = async () => {
  const URL = "https://korean-advice-open-api.vercel.app/api/advice";
  const response = await axios(URL);
  return response.data;
};
