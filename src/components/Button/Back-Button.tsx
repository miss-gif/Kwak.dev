import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleClick} size="icon">
      <ArrowBackIosNewIcon />
    </Button>
  );
};

export default BackButton;
