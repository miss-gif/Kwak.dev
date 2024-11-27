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
  docId?: string;
}

interface firebaseIDProps {
  collectionName: string;
  docId: string;
  formData?: Record<string, any>;
}

// Create: 새 문서 추가
const createData = async ({
  collectionName,
  formData,
}: firebaseCrudApiProps): Promise<void> => {
  await addDoc(collection(db, collectionName), formData);
};

// Read: 모든 데이터 조회
const readData = async ({
  collectionName,
}: firebaseCrudApiProps): Promise<ProjectData[]> => {
  const collectionQuery = query(
    collection(db, collectionName),
    orderBy("id"),
    limit(6),
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
  docId,
}: firebaseIDProps): Promise<any | null> => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

// Update: 특정 ID로 데이터 수정
const updateData = async ({
  collectionName,
  docId,
  formData,
}: firebaseIDProps): Promise<void> => {
  if (!formData) {
    console.log("No data provided for update");
    return;
  }

  const userRef = doc(db, collectionName, docId);
  await updateDoc(userRef, formData);
  console.log("Document updated");
};

// Delete: 특정 ID로 데이터 삭제
const deleteData = async ({
  collectionName,
  docId,
}: firebaseIDProps): Promise<void> => {
  await deleteDoc(doc(db, collectionName, docId));
  console.log("Document deleted");
};

export { createData, deleteData, getDocumentById, readData, updateData };
