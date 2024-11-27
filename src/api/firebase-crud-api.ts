import { ProjectData } from "@/features/Project/types/type";
import { db } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

interface firebaseCrudApiProps {
  collectionName: string;
  formData?: Record<string, any>;
  docID?: string;
}

interface firebaseIDProps {
  collectionName: string;
  docID: string;
  formData?: Record<string, any>;
}

// Create: 새 문서 추가
const createData = async ({
  collectionName,
  formData,
}: firebaseCrudApiProps): Promise<string> => {
  const docRef = await addDoc(collection(db, collectionName), formData); // 문서 추가
  return docRef.id; // Firestore에서 생성한 고유 문서 ID 반환
};

// Read: 모든 데이터 조회
const readData = async ({
  collectionName,
}: firebaseCrudApiProps): Promise<ProjectData[]> => {
  const collectionQuery = query(
    collection(db, collectionName),
    orderBy("id"),
    limit(10),
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

  return result as ProjectData[];
};

// Read by ID: 특정 ID로 문서 조회
const getDocumentById = async ({
  collectionName,
  docID,
}: firebaseIDProps): Promise<any | null> => {
  const docRef = doc(db, collectionName, docID); // 문서 참조 생성
  const docSnap = await getDoc(docRef); // 문서 가져오기

  if (docSnap.exists()) {
    return {
      docID: docSnap.id, // Firestore 문서 키 추가
      ...docSnap.data(), // 문서 데이터 병합
    };
  }
  return null; // 문서가 없을 경우 null 반환
};

// Update: 특정 ID로 데이터 수정
const updateData = async ({
  collectionName,
  docID,
  formData,
}: firebaseIDProps): Promise<void> => {
  if (!formData) {
    console.log("데이터가 없습니다.");
    return;
  }
  const userRef = doc(db, collectionName, docID);
  await updateDoc(userRef, formData);
};

// Delete: 특정 ID로 데이터 삭제
const deleteData = async ({
  collectionName,
  docID,
}: firebaseIDProps): Promise<void> => {
  await deleteDoc(doc(db, collectionName, docID));
  console.log("Document deleted");
};

export { createData, deleteData, getDocumentById, readData, updateData };
