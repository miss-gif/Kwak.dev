import PrivateChatContent from "@/features/Chat/components/PrivateChat/PrivateChatContent";
import PrivateChatFooter from "@/features/Chat/components/PrivateChat/PrivateChatFooter";
import PrivateChatHeader from "@/features/Chat/components/PrivateChat/PrivateChatHeader";

const PrivateChat = () => {
  return (
    <div className="bg-white">
      <PrivateChatHeader />

      <PrivateChatContent />

      <PrivateChatFooter />
    </div>
  );
};

export default PrivateChat;
