import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Member = () => {
  return (
    <Dialog>
      <DialogTrigger>인원</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>채팅방 이름</DialogTitle>
          <DialogDescription>채팅방 참가자</DialogDescription>
          <div className="flex gap-2">
            <div className="">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="">닉네임</div>
              <div className="text-sm">uid</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="">닉네임</div>
              <div className="text-sm">uid</div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Member;
