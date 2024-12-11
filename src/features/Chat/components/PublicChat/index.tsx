import { db } from "@/firebaseConfig";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { formatDate } from "@/utils/formatDate";
import Member from "../PrivateChat/Member";
import Invite from "../PrivateChat/Invite";

interface Message {
  displayName: string;
  uid: string;
  user?: string;
  message: string;
  timestamp: Date;
}

function PublicChat() {
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
      <div className="fixed top-0 z-50 flex h-16 w-full items-center justify-between gap-2 bg-white p-4 text-black shadow-sm">
        <div className="flex items-center gap-1">
          <div className="text-md line-clamp-1">채팅방</div>
          <p className="hidden">
            <Member />
          </p>
        </div>

        <p className="hidden">
          <Invite />
        </p>
        {!user && <p className="text-xs">로그인이 필요합니다.</p>}
      </div>

      <div className="flex flex-col gap-2 px-4 py-20">
        <div className={user ? "" : "blur-sm"}>
          {messages.map((msg, index) => (
            <div key={index}>
              {msg.uid === user?.uid ? (
                // 본인이 보낸 메시지 (오른쪽 정렬)
                <div className="flex justify-end gap-2 py-2">
                  <div className="flex items-end gap-2">
                    <p className="shrink-0 text-xs">{formatDate(msg.timestamp)}</p>
                    <div className="rounded-lg bg-lime-200 p-2 text-sm">{msg.message}</div>
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
      </div>

      <form onSubmit={sendMessage}>
        <div className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-between gap-2 bg-white p-4">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하세요."
          />
          <Button type="submit" size="icon">
            <SendIcon />
          </Button>
        </div>
      </form>
    </>
  );
}

export default PublicChat;
