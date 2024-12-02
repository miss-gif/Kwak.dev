import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PrivateChatFooter = () => {
  return (
    <div className="flex justify-between gap-2 py-5">
      <Input type="text" placeholder="메시지를 입력하세요" />
      <Button type="submit">전송</Button>
    </div>
  );
};

export default PrivateChatFooter;
