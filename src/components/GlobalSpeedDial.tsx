import { ArrowUpToLineIcon, MailIcon, MessageCircleMoreIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const GlobalSpeedDial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 flex flex-col gap-2 p-5">
      <Button size="icon">
        <MessageCircleMoreIcon />
      </Button>

      <Button size="icon" asChild>
        <Link to="/contact">
          <MailIcon />
        </Link>
      </Button>

      <Button
        size="icon"
        onClick={() => {
          scrollToTop();
        }}
      >
        <ArrowUpToLineIcon />
      </Button>
    </div>
  );
};

export default GlobalSpeedDial;
