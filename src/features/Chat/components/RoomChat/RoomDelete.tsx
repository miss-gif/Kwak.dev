import { db } from "@/firebaseConfig";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { useAuthStore } from "@/stores/authStore";

interface RoomDeleteProps {
  activeRoomId: string;
  onRoomDeleted: () => void;
}

function RoomDelete({ activeRoomId, onRoomDeleted }: RoomDeleteProps) {
  const { user } = useAuthStore();

  const deleteRoom = async () => {
    if (!activeRoomId) return;

    try {
      const roomRef = doc(db, "rooms", activeRoomId);
      const roomSnap = await getDoc(roomRef);

      if (roomSnap.exists()) {
        const roomData = roomSnap.data();

        // 개설자의 UID와 로그인한 사용자의 UID가 일치하는지 확인
        if (roomData.participants[0] !== user?.uid) {
          alert("채팅방 삭제 권한이 없습니다.");
          return;
        }

        // 데이터베이스에서 채팅방 삭제
        await deleteDoc(roomRef);
        alert("채팅방이 삭제되었습니다.");
        onRoomDeleted();
      } else {
        alert("존재하지 않는 채팅방입니다.");
      }
    } catch (error) {
      console.error("채팅방 삭제 중 오류:", error);
      alert("채팅방 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="mt-4">
      <button onClick={deleteRoom} className="w-full rounded-lg bg-red-500 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-red-600">
        채팅방 삭제
      </button>
    </div>
  );
}

export default RoomDelete;
