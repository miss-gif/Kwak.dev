import { db } from "@/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

// 사이트 공개 상태 확인
export const sitePublicState = async (): Promise<boolean> => {
  const docRef = doc(db, "admin", "public");
  const docSnap = await getDoc(docRef);

  // Firestore에 저장된 공개 상태를 가져옴
  if (docSnap.exists()) {
    const publicState = docSnap.data().state ?? false; // Firestore에 저장된 state 값

    console.log("Public state: ", publicState);

    return publicState;
  } else {
    throw new Error("Public document not found in Firestore.");
  }
};

// 사이트의 공개 상태를 변경하는 함수
export const changeSitePublicState = async (state: boolean) => {
  const docRef = doc(db, "admin", "public");

  // Firestore에 공개 상태를 업데이트
  await setDoc(docRef, { state }, { merge: true });

  console.log("Public state updated to: ", state);
};
