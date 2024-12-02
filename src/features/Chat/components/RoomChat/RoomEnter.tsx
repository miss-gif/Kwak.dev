import { useState } from "react";
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface RoomEnterProps {
  onRoomEntered: (id: string, nickname: string) => void; // 닉네임 전달
}

function RoomEnter({ onRoomEntered }: RoomEnterProps) {
  const [roomId, setRoomId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState(""); // 닉네임 상태 추가
  const [error, setError] = useState("");

  const enterRoom = async () => {
    try {
      const roomRef = doc(db, "rooms", roomId);
      const roomSnap = await getDoc(roomRef);

      if (!roomSnap.exists()) {
        setError("존재하지 않는 채팅방입니다.");
        return;
      }

      const roomData = roomSnap.data();

      if (roomData.isPrivate) {
        if (!password.trim() || roomData.password !== password) {
          setError("비밀번호가 틀렸습니다.");
          return;
        }
      }

      if (!nickname.trim()) {
        setError("닉네임을 입력하세요.");
        return;
      }

      setError("");
      onRoomEntered(roomId, nickname);
    } catch (err) {
      console.error("채팅방 입장 오류:", err);
      setError("채팅방 입장 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="space-y-4">
      <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="채팅방 ID" className="w-full rounded border p-2" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full rounded border p-2" />
      <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임" className="w-full rounded border p-2" />
      <button onClick={enterRoom} className="w-full rounded bg-green-500 py-2 text-white">
        입장
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default RoomEnter;
