import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

interface RoomChatMessagesProps {
  activeRoomId: string;
  nickname: string; // 닉네임 추가
}

function RoomChatMessages({ activeRoomId, nickname }: RoomChatMessagesProps) {
  const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const messagesRef = collection(db, `messages/${activeRoomId}/messages`);
    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data() as { user: string; message: string }));
    });

    return () => unsubscribe();
  }, [activeRoomId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    await addDoc(collection(db, `messages/${activeRoomId}/messages`), {
      user: nickname,
      message: input,
      timestamp: new Date(),
    });
    setInput("");
  };

  return (
    <div className="flex h-full flex-col p-4">
      {/* 메시지 목록 */}
      <div className="flex-1 overflow-y-auto border-b p-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            <span className="font-bold text-blue-500">{msg.user}: </span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>

      {/* 메시지 입력 */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지 입력"
          className="flex-1 rounded-lg border p-2 focus:ring focus:ring-blue-400"
        />
        <button onClick={sendMessage} className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          전송
        </button>
      </div>
    </div>
  );
}

export default RoomChatMessages;
