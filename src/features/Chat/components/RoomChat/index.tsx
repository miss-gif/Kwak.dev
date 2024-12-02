import { useState } from "react";
import RoomCreation from "./RoomCreation";
import RoomList from "./RoomList";
import RoomEnter from "./RoomEnter";
import RoomChatMessages from "./RoomChatMessages";
import RoomDelete from "./RoomDelete";

function RoomChatApp() {
  const [activeRoomId, setActiveRoomId] = useState<string | null>(null);

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">채팅방</h1>
      {/* 채팅방 생성 */}
      <RoomCreation onRoomCreated={(id) => setActiveRoomId(id)} />

      {/* 채팅방 리스트 */}
      <RoomList onSelectRoom={(id) => setActiveRoomId(id)} />

      {/* 비공개 채팅방 입장 */}
      {activeRoomId === null && <RoomEnter onRoomEntered={(id) => setActiveRoomId(id)} />}

      {/* 채팅방 삭제 */}
      {activeRoomId && <RoomDelete activeRoomId={activeRoomId} onRoomDeleted={() => setActiveRoomId(null)} />}

      {/* 메시지 */}
      {activeRoomId && <RoomChatMessages activeRoomId={activeRoomId} />}
    </div>
  );
}

export default RoomChatApp;
