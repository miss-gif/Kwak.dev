import PrivateChatBody from "./PrivateChatBody";
import PrivateChatFooter from "./PrivateChatFooter";
import PrivateChatHeader from "./PrivateChatHeader";

const PrivateChat = () => {
  return (
    <div className="bg-zinc-500 p-5 text-white">
      <PrivateChatHeader />

      <PrivateChatBody />

      <PrivateChatFooter />
    </div>
  );
};

export default PrivateChat;
