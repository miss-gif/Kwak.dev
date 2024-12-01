import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Chat from "../components/PublicChat";
import RoomChat from "../components/RoomChat";

const ChatPage = () => {
  const props = {
    title: "실시간 채팅",
    subtitle: "✨ 실시간으로 메시지를 주고받아보세요! ",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="flex justify-between">
          <Chat />
          <RoomChat />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default ChatPage;
