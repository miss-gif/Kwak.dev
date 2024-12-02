import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

interface Room {
  id: string;
  name: string;
  isPrivate: boolean;
}

interface RoomListProps {
  onSelectRoom: (id: string) => void;
}

function RoomList({ onSelectRoom }: RoomListProps) {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const roomsRef = collection(db, "rooms");
    const unsubscribe = onSnapshot(roomsRef, (snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Room));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">채팅방 목록</h2>
      {rooms.map((room) => (
        <button key={room.id} onClick={() => onSelectRoom(room.id)} className="w-full rounded-lg bg-gray-200 px-4 py-2 text-left transition hover:bg-gray-300">
          {room.name} {room.isPrivate ? "🔒" : ""}
        </button>
      ))}
    </div>
  );
}

export default RoomList;
