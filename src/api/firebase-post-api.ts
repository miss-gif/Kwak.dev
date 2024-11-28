import { db } from "@/firebaseConfig";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

interface firebaseCrudApiProps {
  collectionName: string;
  formData?: Record<string, any>;
  docID?: string;
}

// Read: 모든 데이터 조회
export const readData = async <T>({
  collectionName,
}: firebaseCrudApiProps): Promise<T[]> => {
  const collectionQuery = query(
    collection(db, collectionName),
    orderBy("createdAt", "desc"),
    limit(20),
  );

  const querySnapshot = await getDocs(collectionQuery);

  // Firestore 문서 데이터를 변환
  const result = querySnapshot.docs.map((doc) => {
    const data = doc.data(); // 문서 데이터 가져오기
    // console.log("Firestore 문서 키 (id):", doc.id); // 디버깅용

    return {
      docID: doc.id, // 문서 키 포함
      ...data, // 문서 데이터 병합
    };
  });

  return result as T[];
};
