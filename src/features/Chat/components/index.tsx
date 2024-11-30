// src/Chat.js
import { db } from "@/firebaseConfig";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Message {
  user?: string;
  message: string;
  timestamp: Date;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Firestore에서 실시간으로 메시지를 가져옵니다.
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp"));
    // onSnapshot은 실시간으로 데이터베이스의 변경 사항을 감지합니다.
    const unsubscribe = onSnapshot(q, (snapshot) => setMessages(snapshot.docs.map((doc) => doc.data() as Message)));

    return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
  }, []);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        await addDoc(collection(db, "messages"), {
          message: input,
          timestamp: new Date(),
        });
        setInput("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.user || "익명"}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="메시지를 입력하세요..." />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default Chat;
