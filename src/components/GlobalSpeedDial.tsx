import { ArrowUpToLineIcon, MailIcon, MessageCircleMoreIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const GlobalSpeedDial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openChat = () => {
    window.open("new/chat", "_blank", "width=500,height=600"); // 새 창에서 new/chat 열기
  };

  return (
    <div className="fixed bottom-0 right-0 flex flex-col gap-2 p-5">
      <Button size="icon" asChild>
        <div>
          <ModeToggle />
        </div>
      </Button>

      <Button size="icon" onClick={openChat}>
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
