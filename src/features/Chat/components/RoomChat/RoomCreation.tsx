import { useState } from "react";
import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useAuthStore } from "@/stores/authStore";

interface RoomCreationProps {
  onRoomCreated: (id: string) => void;
}

function RoomCreation({ onRoomCreated }: RoomCreationProps) {
  const { user } = useAuthStore();
  const [roomName, setRoomName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");
  const [maxParticipants, setMaxParticipants] = useState(5); // 기본값 5

  const createRoom = async () => {
    if (!roomName.trim()) {
      alert("채팅방 이름을 입력해주세요.");
      return;
    }
    if (isPrivate && password.trim() === "") {
      alert("비공개 채팅방의 비밀번호를 설정해주세요.");
      return;
    }
    if (maxParticipants < 2 || maxParticipants > 20) {
      alert("참여 가능 인원은 1에서 20 사이여야 합니다.");
      return;
    }

    try {
      const roomRef = await addDoc(collection(db, "rooms"), {
        name: roomName,
        creatorUid: user?.uid, // 개설자 UID
        isPrivate: isPrivate,
        password: isPrivate ? password : null,
        participants: [user?.uid], // 개설자 포함
        maxParticipants: maxParticipants, // 최대 참여 가능 인원
        createdAt: new Date(), // 생성 시간
      });

      onRoomCreated(roomRef.id);
      alert("채팅방이 성공적으로 생성되었습니다.");
    } catch (error) {
      console.error("채팅방 생성 중 오류:", error);
      alert("채팅방 생성에 실패했습니다.");
    }
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">채팅방 생성</h2>
      {/* 채팅방 이름 입력 */}
      <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder="채팅방 이름" className="w-full rounded border p-2" />

      {/* 비공개 여부 설정 */}
      <div className="flex items-center">
        <label className="mr-2">비공개</label>
        <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
      </div>

      {/* 비공개일 때 비밀번호 입력 */}
      {isPrivate && (
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full rounded border p-2" />
      )}

      {/* 최대 참여 가능 인원 설정 */}
      <div>
        <label className="mr-2">참여 가능 인원 (2~20):</label>
        <input
          type="number"
          value={maxParticipants}
          onChange={(e) => setMaxParticipants(Number(e.target.value))}
          min="2"
          max="20"
          className="w-20 rounded border p-2 text-center"
        />
      </div>

      {/* 채팅방 생성 버튼 */}
      <button onClick={createRoom} className="w-full rounded bg-blue-500 py-2 text-white transition hover:bg-blue-600">
        채팅방 생성
      </button>
    </div>
  );
}

export default RoomCreation;
