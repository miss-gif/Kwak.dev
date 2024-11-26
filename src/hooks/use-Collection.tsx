import { ProjectData } from "@/features/Project/types/type";
import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
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

  const fetchCollection = async ({
    collectionName,
  }: {
    collectionName: string;
  }): Promise<ProjectData[]> => {
    const list = collection(db, collectionName);
    const snapshot = await getDocs(list);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ProjectData[]; // 타입 명시
    return data;
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

  return { isLoading, onSubmit, handleCancel, fetchCollection };
};

export default useCollection;
