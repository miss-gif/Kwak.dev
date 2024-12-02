import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Invite = () => {
  return (
    <Dialog>
      <Button>
        <DialogTrigger>멤버추가</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>채팅방 초대</DialogTitle>
          <DialogDescription>사용자를 초대합니다.</DialogDescription>
          <Input type="text" placeholder="uid입력" />
          <Button type="submit">초대</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Invite;
