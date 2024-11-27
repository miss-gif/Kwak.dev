import { ProjectData } from "@/features/Project/types/type";
import { db } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface CollectionData<T = any> {
  collectionName: string;
  data: T;
}

const useCollection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 전체 리스트 호출
  const fetchCollection = async ({
    collectionName,
  }: {
    collectionName: string;
  }): Promise<ProjectData[]> => {
    const list = query(collection(db, collectionName), orderBy("id"));
    const snapshot = await getDocs(list);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ProjectData[]; // 타입 명시
    return data;
  };

  const fetchProjectByField = async ({
    collectionName,
    fieldName,
    value,
  }: {
    collectionName: string;
    fieldName: string; // 검색할 필드 이름
    value: any; // 검색할 필드 값
  }): Promise<ProjectData> => {
    try {
      const q = query(
        collection(db, collectionName),
        where(fieldName, "==", value), // 필드 값 조건 설정
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error(
          `필드 값 '${value}'에 해당하는 문서를 찾을 수 없습니다.`,
        );
      }

      // 첫 번째 문서 반환 (여러 문서가 나올 경우 상황에 맞게 처리 필요)
      const docSnap = querySnapshot.docs[0];
      return {
        id: docSnap.id, // Document ID 포함
        ...docSnap.data(),
      } as ProjectData;
    } catch (error) {
      console.error("fetchProjectByField 에러:", error);
      throw error;
    }
  };

  // ID로 프로젝트 호출
  const fetchProjectById = async ({
    collectionName,
    id,
  }: {
    collectionName: string;
    id: string | any;
  }): Promise<ProjectData> => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    // 데이터가 존재하지 않을 경우 예외 처리
    if (!docSnap.exists()) {
      throw new Error(`문서가 존재하지 않습니다. ID: ${id}`);
    }

    // 데이터가 존재할 경우 반환
    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as ProjectData;
  };

  const fetchProject = async ({
    collectionName,
    id,
    isFieldKey = false, // true면 필드 키로 검색, false면 Document ID로 검색
  }: {
    collectionName: string;
    id: string | any;
    isFieldKey?: boolean;
  }): Promise<ProjectData> => {
    if (isFieldKey) {
      // 필드 키로 검색
      return await fetchProjectByField({
        collectionName,
        fieldName: "id", // 예를 들어 'id' 필드 사용
        value: id,
      });
    } else {
      // Document ID로 검색
      return await fetchProjectById({
        collectionName,
        id,
      });
    }
  };

  // 저장
  const onSubmit = async ({ collectionName, data }: CollectionData) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, collectionName), data);
      toast.success(`${collectionName}이 성공적으로 저장되었습니다.`);
      navigate(`/project/${data.id}`);
    } catch (error) {
      toast.error(`${collectionName} 저장에 실패했습니다.`);
    } finally {
      setIsLoading(false);
    }
  };

  // 취소
  const handleCancel = () => {
    if (confirm("작성을 취소하시겠습니까?")) {
      navigate(-1);
      toast.error("작성이 취소되었습니다.");
    }
  };

  return {
    isLoading,
    onSubmit,
    handleCancel,
    fetchCollection,
    fetchProjectById,
    fetchProject,
  };
};

export default useCollection;
