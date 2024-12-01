import { db } from "@/firebaseConfig";
import { useAuthStore } from "@/stores/authStore";
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Room {
  id: string;
  name: string;
  isPrivate: boolean;
  password?: string; // 비밀번호가 있을 수 있음
  participants: string[]; // 참여자 UID 목록
}

interface Message {
  user?: string;
  message: string;
  timestamp: Date;
}

function RoomChat() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const { user } = useAuthStore();
  const [roomPassword, setRoomPassword] = useState<string>("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean | null>(null);

  // 채팅방에 입장할 때 비밀번호 확인
  const enterRoom = async (roomId: string, password: string) => {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);

    if (roomSnap.exists()) {
      const roomData = roomSnap.data() as Room;
      if (roomData.isPrivate && roomData.password !== password) {
        setIsPasswordCorrect(false);
      } else {
        setIsPasswordCorrect(true);
        setActiveRoomId(roomId);
      }
    }
  };

  // 채팅방 삭제 요청
  const deleteRoom = async (roomId: string) => {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);
    if (roomSnap.exists()) {
      const roomData = roomSnap.data() as Room;
      const participants = roomData.participants;

      // 과반수 동의를 위한 로직
      const agreeCount = participants.filter((uid) => () => {
        // 동의한 참여자의 로직
        return true;
      }).length;

      if (agreeCount > participants.length / 2) {
        await deleteDoc(roomRef); // 채팅방 삭제
      }
    }
  };

  // 채팅방 리스트 가져오기
  useEffect(() => {
    const roomsRef = collection(db, "rooms");
    const unsubscribe = onSnapshot(roomsRef, (snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Room));
    });
    return () => unsubscribe();
  }, []);

  // 선택된 채팅방의 메시지 구독
  useEffect(() => {
    if (!activeRoomId) return;

    const messagesRef = collection(db, `messages/${activeRoomId}/messages`);
    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data() as Message));
    });

    return () => unsubscribe();
  }, [activeRoomId]);

  // 메시지 전송
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!activeRoomId || input.trim() === "") return;

    try {
      await addDoc(collection(db, `messages/${activeRoomId}/messages`), {
        user: user?.displayName || "익명",
        message: input,
        timestamp: new Date(),
      });
      setInput("");
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

  // 채팅방 생성
  const createRoom = async (roomName: string, isPrivate: boolean, password?: string) => {
    try {
      const roomRef = await addDoc(collection(db, "rooms"), {
        name: roomName,
        isPrivate: isPrivate,
        password: password || null,
        participants: [user?.uid], // 채팅방 개설자의 UID 추가
      });
      console.log("채팅방 생성됨", roomRef.id);
    } catch (error) {
      console.error("채팅방 생성 오류", error);
    }
  };

  return (
    <div className="space-y-4 p-6">
      <button
        onClick={() => {
          createRoom("테스트 채팅방", false);
        }}
        className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
      >
        채팅방 생성
      </button>

      {/* 채팅방 리스트 */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-sky-500">채팅방 목록</h2>
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => setActiveRoomId(room.id)}
            className="w-full rounded-xl bg-red-50 px-6 py-3 text-left transition duration-300 hover:bg-red-100"
          >
            {room.name} {room.isPrivate ? "🔒" : ""}
          </button>
        ))}
      </div>

      {activeRoomId === null && (
        <div className="space-y-4">
          <h2 className="text-lg font-medium">비공개 채팅방에 입장하려면 비밀번호를 입력하세요.</h2>
          <input
            type="password"
            value={roomPassword}
            onChange={(e) => setRoomPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => enterRoom(selectedRoomId, roomPassword)}
            className="w-full rounded-lg bg-green-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-green-600"
          >
            입장
          </button>
          {isPasswordCorrect === false && <p className="text-sm text-red-500">비밀번호가 틀렸습니다.</p>}
        </div>
      )}

      <button
        onClick={() => activeRoomId && deleteRoom(activeRoomId)}
        className="w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-red-600"
      >
        채팅방 삭제
      </button>

      {/* 선택된 채팅방 메시지 */}
      <div>
        {activeRoomId ? (
          <>
            <h2 className="text-xl font-semibold">현재 채팅방: {rooms.find((room) => room.id === activeRoomId)?.name}</h2>
            <div className="mt-4 space-y-2">
              {messages.map((msg, index) => (
                <p key={index} className="text-gray-700">
                  <strong className="font-semibold">{msg.user}:</strong> {msg.message}
                </p>
              ))}
            </div>
            <form onSubmit={sendMessage} className="mt-4 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600">
                전송
              </button>
            </form>
          </>
        ) : (
          <p className="text-gray-500">채팅방을 선택하세요.</p>
        )}
      </div>
    </div>
  );
}

export default RoomChat;
