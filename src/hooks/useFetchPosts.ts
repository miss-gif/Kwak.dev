import { useState, useEffect } from "react";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import Post from "@/types/post";
import { db } from "@/firebaseConfig";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map((doc) => {
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
        setPosts(postsData);
      } catch (error) {
        setError("Error fetching posts");
      }
    };

    fetchPosts();
  }, []);

  return { posts, error };
};

export default useFetchPosts;
