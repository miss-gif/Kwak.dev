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

  const createRoom = async () => {
    if (!roomName.trim()) return;

    const roomRef = await addDoc(collection(db, "rooms"), {
      name: roomName,
      isPrivate,
      password: isPrivate ? password : null,
      participants: [user?.uid],
    });

    onRoomCreated(roomRef.id);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">채팅방 생성</h2>
      <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder="채팅방 이름" className="w-full rounded border p-2" />
      <div className="flex items-center">
        <label className="mr-2">비공개</label>
        <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
      </div>
      {isPrivate && (
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full rounded border p-2" />
      )}
      <button onClick={createRoom} className="w-full rounded bg-blue-500 py-2 text-white">
        채팅방 생성
      </button>
    </div>
  );
}

export default RoomCreation;
