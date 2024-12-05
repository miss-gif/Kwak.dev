import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // 이미 설정된 Firebase config

// 닉네임 중복 확인
export const checkDisplayNameAvailability = async (name: string): Promise<boolean> => {
  const displayNamesRef = collection(db, "displayNames");
  const q = query(displayNamesRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  return querySnapshot.empty; // If empty, the nickname is available
};

// Firestore에 사용자 데이터 저장
export const saveUserData = async (user: any, displayName: string) => {
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    displayName: displayName,
    uid: user.uid,
    creationTime: user.metadata.creationTime,
    points: 0,
  });

  // DisplayNames 컬렉션에 닉네임 저장
  await setDoc(doc(db, "displayNames", user.uid), {
    name: displayName,
  });
};
