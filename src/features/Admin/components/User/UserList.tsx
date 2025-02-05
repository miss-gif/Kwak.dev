import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface User {
  creationTime: string;
  displayName: string;
  email: string;
  lastSignInTime: string;
  uid: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Firestore에서 사용자 데이터 가져오기
  const fetchUsers = async () => {
    try {
      const usersCollection = collection(db, "users"); // Firestore 컬렉션 참조 (users 컬렉션)
      const snapshot = await getDocs(usersCollection); // 컬렉션의 모든 문서 가져오기
      const usersData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          uid: doc.id, // Firestore 문서 ID
          creationTime: data.creationTime, // 사용자 생성 시간
          displayName: data.displayName, // 사용자 닉네임
          email: data.email, // 사용자 이메일
          lastSignInTime: data.lastSignInTime, // 사용자 최근 접속 시간
        };
      });
      setUsers(usersData); // 사용자 데이터 상태 업데이트
    } catch (error) {
      console.error("사용자 데이터를 불러오는 중 에러 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">유저 관리 페이지</h1>
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">이메일</th>
            <th className="border-b px-4 py-2">닉네임</th>
            <th className="border-b px-4 py-2">생성일</th>
            <th className="border-b px-4 py-2">최근 접속일</th>
            <th className="border-b px-4 py-2">UID</th>
            <th className="border-b px-4 py-2">메시지 기능</th>
            <th className="border-b px-4 py-2">임시 차단</th>
            <th className="border-b px-4 py-2">계정 삭제</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid} className="hover:bg-gray-100">
              <td className="border-b px-4 py-2">{user.email}</td>
              <td className="border-b px-4 py-2">{user.displayName}</td>
              <td className="border-b px-4 py-2">{new Date(user.creationTime).toLocaleDateString()}</td>
              <td className="border-b px-4 py-2">{new Date(user.lastSignInTime).toLocaleDateString()}</td>
              <td className="border-b px-4 py-2">
                <CopyToClipboard text={user.uid} onCopy={() => alert("UID 복사됨!")}>
                  <span className="cursor-pointer text-blue-500 hover:underline">{user.uid}</span>
                </CopyToClipboard>
              </td>
              <td className="border-b px-4 py-2">
                <button className="rounded bg-blue-500 px-2 py-1 text-white">메시지 관리</button>
              </td>
              <td className="border-b px-4 py-2">
                <button className="rounded bg-yellow-500 px-2 py-1 text-white">임시 차단</button>
              </td>
              <td className="border-b px-4 py-2">
                <button className="rounded bg-red-500 px-2 py-1 text-white">계정 삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
