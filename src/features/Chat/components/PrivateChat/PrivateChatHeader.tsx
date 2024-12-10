import Invite from "./Invite";
import Member from "./Member";

const PrivateChatHeader = () => {
  return (
    <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-between gap-2 bg-white p-4 text-black">
      <div className="flex items-center gap-1">
        <div className="text-md line-clamp-1">채팅방</div>
        <Member />
      </div>

      <Invite />
    </div>
  );
};

export default PrivateChatHeader;
