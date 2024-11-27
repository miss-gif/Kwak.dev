import { ProjectData } from "@/features/Project/types/type";
import { db } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
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
  const docRef = await addDoc(collection(db, collectionName), formData);
  console.log("Document written with ID: ", docRef.id);
};

// Read: 모든 데이터 조회
const readData = async ({
  collectionName,
}: firebaseCrudApiProps): Promise<ProjectData[]> => {
  const querySnapshot = await getDocs(
    query(collection(db, collectionName), orderBy("id")),
  );
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ProjectData[]; // 타입 명시
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

export { createData, readData, getDocumentById, updateData, deleteData };
