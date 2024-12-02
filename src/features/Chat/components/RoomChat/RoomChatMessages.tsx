import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

interface RoomChatMessagesProps {
  activeRoomId: string;
}

function RoomChatMessages({ activeRoomId }: RoomChatMessagesProps) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const messagesRef = collection(db, `messages/${activeRoomId}/messages`);
    const q = query(messagesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, [activeRoomId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    await addDoc(collection(db, `messages/${activeRoomId}/messages`), {
      message: input,
      timestamp: new Date(),
    });
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg.message}</p>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="메시지 입력" className="w-full rounded border p-2" />
      <button onClick={sendMessage} className="rounded bg-blue-500 text-white">
        전송
      </button>
    </div>
  );
}

export default RoomChatMessages;
