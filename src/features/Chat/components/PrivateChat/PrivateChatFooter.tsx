import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

const PrivateChatFooter = () => {
  return (
    <div className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-between gap-2 bg-white p-4">
      <Input type="text" placeholder="메시지를 입력하세요" className="text-black" />
      <Button type="submit" size="icon">
        <SendIcon />
      </Button>
    </div>
  );
};

export default PrivateChatFooter;
