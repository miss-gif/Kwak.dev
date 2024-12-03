import { ArrowUpToLineIcon, MailIcon, MessageCircleMoreIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const GlobalSpeedDial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openChat = () => {
    window.open("new/chat", "_blank", "width=400,height=600"); // 새 창에서 new/chat 열기
  };

  return (
    <div className="fixed bottom-12 right-0 flex flex-col gap-2 p-5">
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
