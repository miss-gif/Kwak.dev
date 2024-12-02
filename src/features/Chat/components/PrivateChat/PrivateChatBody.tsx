import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PrivateChatBody = () => {
  return (
    <div className="내용 py-5">
      <div className="flex gap-2 py-2">
        <div className="">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="">닉네임</div>
          <div className="flex items-end gap-2">
            <div className="rounded-sm bg-white p-2 text-sm text-black">채팅</div>
            <p className="text-sm">오후 8:12</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 py-2">
        <div className="justify flex items-end gap-2">
          <p className="text-sm">오후 8:12</p>
          <div className="rounded-sm bg-white p-2 text-sm text-black">채팅</div>
        </div>
      </div>
    </div>
  );
};

export default PrivateChatBody;
