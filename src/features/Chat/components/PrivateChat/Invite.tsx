import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Invite = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="text-xs">초대</Button>
      </DialogTrigger>

      <DialogContent className="rounded-md">
        <DialogHeader className="py-5">
          <DialogTitle>채팅방 초대</DialogTitle>
          <DialogDescription>사용자를 초대합니다.</DialogDescription>

          <div className="space-y-2 pt-5">
            <Input type="text" placeholder="uid입력" />
            <Button type="submit" className="w-full">
              초대
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Invite;
