import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="room">Room</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Chat />
          </TabsContent>
          <TabsContent value="room">
            <RoomChat />
          </TabsContent>
        </Tabs>

        <div className="flex justify-between"></div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default ChatPage;
