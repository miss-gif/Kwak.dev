import { useState } from "react";
import RoomChatMessages from "./RoomChatMessages";
import RoomCreation from "./RoomCreation";
import RoomDelete from "./RoomDelete";
import RoomEnter from "./RoomEnter";
import RoomList from "./RoomList";

function RoomChatApp() {
  const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>(""); // 닉네임 상태 추가

  const handleRoomEnter = (roomId: string, nickname: string) => {
    setActiveRoomId(roomId);
    setNickname(nickname);
  };

  return (
    <div className="flex justify-between gap-4">
      {/* 채팅방 생성 */}
      <div className="w-1/4">
        <RoomCreation onRoomCreated={(id) => setActiveRoomId(id)} />
      </div>

      {/* 채팅방 번호 입장 */}
      <div className="w-1/4">
        <RoomEnter onRoomEntered={(id) => setActiveRoomId(id)} />
      </div>

      {/* 채팅방 목록 */}
      <div className="w-1/4">
        <RoomList onSelectRoom={(id) => setActiveRoomId(id)} />
      </div>

      <div className="w-1/4">
        {/* 채팅방 삭제 */}
        {activeRoomId && <RoomDelete activeRoomId={activeRoomId} onRoomDeleted={() => setActiveRoomId(null)} />}
        {activeRoomId && <RoomChatMessages activeRoomId={activeRoomId} nickname={nickname} />}
      </div>
    </div>
  );
}

export default RoomChatApp;
