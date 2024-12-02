import { useState } from "react";
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface RoomEnterProps {
  onRoomEntered: (id: string) => void;
}

function RoomEnter({ onRoomEntered }: RoomEnterProps) {
  const [roomId, setRoomId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const enterRoom = async () => {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);

    if (roomSnap.exists()) {
      const roomData = roomSnap.data();
      if (roomData.isPrivate && roomData.password !== password) {
        setError("비밀번호가 틀렸습니다.");
      } else {
        setError("");
        onRoomEntered(roomId);
      }
    }
  };

  return (
    <div className="space-y-3">
      <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="채팅방 ID" className="w-full rounded border p-2" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full rounded border p-2" />
      <button onClick={enterRoom} className="w-full rounded bg-green-500 py-2 text-white">
        입장
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default RoomEnter;
