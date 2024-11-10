import { useState, useEffect } from "react";
import {
  query,
  collection,
  getDocs,
  orderBy,
  where,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import Post from "@/types/post";

const useFetchPosts = (searchTerm: string, pageSize: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastDoc, setLastDoc] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 게시물을 가져오는 함수
  const fetchPosts = async (isNewSearch = false) => {
    setLoading(true);
    setError(null);

    try {
      // 기본 쿼리 생성
      let q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(pageSize),
      );

      // 검색어가 있으면 `title` 필드로 필터링 추가
      if (searchTerm) {
        q = query(
          collection(db, "posts"),
          where("title", ">=", searchTerm),
          where("title", "<=", searchTerm + "\uf8ff"),
          orderBy("title"),
          orderBy("createdAt", "desc"), // 추가: title에 대한 정렬 먼저 수행
          limit(pageSize),
        );
      }

      // 페이지네이션용 마지막 문서 추가
      if (lastDoc && !isNewSearch) {
        q = query(q, startAfter(lastDoc));
      }

      // 쿼리 실행
      const querySnapshot = await getDocs(q);
      // 쿼리 결과를 Post 타입으로 변환
      const fetchedPosts = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          postId: doc.id,
          title: data.title,
          content: data.content,
          author: data.author,
          likes: data.likes ?? 0,
          dislikes: data.dislikes ?? 0,
          views: data.views ?? 0,
          createdAt: data.createdAt.toDate(),
          likedBy: data.likedBy ?? [],
          dislikedBy: data.dislikedBy ?? [],
        };
      });

      if (isNewSearch) {
        // 새로운 검색이면 posts를 교체
        setPosts(fetchedPosts);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
      }

      // 다음 페이지를 위한 마지막 문서와 hasMore 상태 업데이트
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] || null);
      setHasMore(querySnapshot.docs.length === pageSize);
    } catch (error) {
      setError("Error fetching posts");
      console.error("Error fetching posts:", error); // 추가: 콘솔에 상세 오류 로그 출력
    } finally {
      setLoading(false);
    }
  };

  // 검색어나 페이지 크기가 변경되면 새로 로드
  useEffect(() => {
    fetchPosts(true);
  }, [searchTerm, pageSize]);

  return {
    posts,
    error,
    loading,
    hasMore,
    fetchMorePosts: () => fetchPosts(false),
  };
};

export default useFetchPosts;
