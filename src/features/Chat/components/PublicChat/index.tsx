// src/Chat.js
import { db } from "@/firebaseConfig";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { formatDate } from "@/utils/formatDate";

interface Message {
  displayName: string;
  uid: string;
  user?: string;
  message: string;
  timestamp: Date;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const { user } = useAuthStore();

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
          uid: user?.uid,
          displayName: user?.displayName,
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
    <>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.uid === user?.uid ? (
              // 본인이 보낸 메시지 (오른쪽 정렬)
              <div className="flex justify-end gap-2 py-2">
                <div className="flex items-end gap-2">
                  <div className="rounded-lg bg-lime-200 p-2 text-sm">{msg.message}</div>
                  <p className="shrink-0 text-xs">{formatDate(msg.timestamp)}</p>
                </div>
              </div>
            ) : (
              // 상대방이 보낸 메시지 (왼쪽 정렬)
              <div className="space-y-1 py-2">
                <div className="text-sm">{msg.displayName}</div>
                <div className="flex items-end gap-2">
                  <div className="rounded-lg bg-gray-100 p-2 text-sm">{msg.message}</div>
                  <p className="shrink-0 text-xs">{formatDate(msg.timestamp)}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <div className="flex gap-1">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하세요..."
          />
          <Button type="submit">
            <SendIcon />
          </Button>
        </div>
      </form>
    </>
  );
}

export default Chat;
