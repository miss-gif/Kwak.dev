import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LinkButtonProps {
  title: string | JSX.Element;
  link: string;
}

const LinkButton = ({ title, link }: LinkButtonProps) => {
  const navigate = useNavigate();

  const onClink = () => {
    navigate(link);
  };

  return (
    <Button variant="contained" onClick={onClink}>
      {title}
    </Button>
  );
};

export default LinkButton;
