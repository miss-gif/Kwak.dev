import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Invite from "./Invite";
import Member from "./Member";

const PrivateChatHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <div className="">채팅방 이름</div>
          <Member />
        </div>
      </div>

      <Invite />
    </div>
  );
};

export default PrivateChatHeader;
