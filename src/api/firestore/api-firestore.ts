import { collection, doc, getDocs, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { ProjectData } from "@/features/Project/types/type";
import { getDocumentById } from "../firebase-crud-api";
import { ProjectFormData } from "@/types/ProjectFormData";

// 닉네임 중복 확인
export const checkDisplayNameAvailability = async (name: string): Promise<boolean> => {
  const displayNamesRef = collection(db, "displayNames");
  const q = query(displayNamesRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  return querySnapshot.empty; // If empty, the nickname is available
};

// 유저 데이터 저장
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

// 문서 ID로 프로젝트 데이터 가져오기
export const fetchProjectById = async (id: string): Promise<ProjectFormData> => {
  const projectData = await getDocumentById({
    collectionName: "projects",
    docID: id,
  });
  return projectData;
};

// 프로젝트 전체 데이터 가져오기
export const fetchProjects = async (): Promise<ProjectData[]> => {
  try {
    const projectCollection = collection(db, "projects"); // "projects" 컬렉션 참조

    // Firestore 쿼리: endDate를 기준으로 최신순 정렬
    const projectQuery = query(projectCollection, orderBy("endDate", "desc"));

    const querySnapshot = await getDocs(projectQuery); // 쿼리 실행

    const projects: ProjectData[] = querySnapshot.docs.map((doc) => ({
      docID: doc.id, // 문서 ID 추가
      ...doc.data(), // 문서 데이터 추가
    })) as ProjectData[]; // 타입 명시

    return projects;
  } catch (error) {
    console.error("프로젝트 데이터를 가져오는 중 에러 발생:", error);
    throw error;
  }
};

// 프로젝트 수정
export const updateProject = async (docID: string, formData: Record<string, any>) => {
  const projectRef = doc(db, "projects", docID); // 특정 문서 참조
  await updateDoc(projectRef, formData);
};
