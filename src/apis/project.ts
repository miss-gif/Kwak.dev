import { COLLECTIONS } from "@/constants";
import { db } from "@/firebaseConfig";
import { Project } from "@/types/project";
import { QuerySnapshot, collection, getDocs, limit, query, startAfter } from "firebase/firestore";

// 전체 프로젝트 목록을 가져오는 함수
export const getProjects = async (pageParams?: QuerySnapshot<Project>) => {
  const projectQuery =
    pageParams === null // 페이지 파라미터가 없으면 처음부터 10개를 가져옴
      ? query(collection(db, COLLECTIONS.PROJECTS), limit(10))
      : query(collection(db, COLLECTIONS.PROJECTS), startAfter(pageParams), limit(10));

  // 프로젝트 목록
  const projectsSnapshot = await getDocs(projectQuery);

  // 프로젝트 목록을 배열로 변환
  const projects = projectsSnapshot.docs.map(
    (doc) =>
      ({
        docID: doc.id,
        ...doc.data(),
      }) as Project,
  );

  // 마지막 프로젝트 정보
  const lastVisible = projectsSnapshot.docs[projectsSnapshot.docs.length - 1];

  return { projects, lastVisible };
};
