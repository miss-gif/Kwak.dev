import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

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
      const usersCollection = collection(db, "users"); // 'users'라는 Firestore 컬렉션
      const snapshot = await getDocs(usersCollection);
      const usersData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          uid: doc.id, // Firestore 문서 ID
          creationTime: data.creationTime,
          displayName: data.displayName,
          email: data.email,
          lastSignInTime: data.lastSignInTime,
        };
      });
      setUsers(usersData);
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
    <div>
      <h1>유저 관리 페이지</h1>
      <table>
        <thead>
          <tr>
            <th>이메일</th>
            <th>닉네임</th>
            <th>생성일</th>
            <th>최근 접속일</th>
            <th>UID</th>
            <th>메시지 기능</th>
            <th>임시 차단</th>
            <th>계정 삭제</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.email}</td>
              <td>{user.displayName}</td>
              <td>{new Date(user.creationTime).toLocaleDateString()}</td>
              <td>{new Date(user.lastSignInTime).toLocaleDateString()}</td>
              <td>{user.uid}</td>
              <td>
                <button>메시지 관리</button>
              </td>
              <td>
                <button>임시 차단</button>
              </td>
              <td>
                <button>계정 삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
