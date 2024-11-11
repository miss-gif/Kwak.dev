import { getPostById } from "@/api/postApi";
import { useQuery } from "@tanstack/react-query";

const useGetPosts = (postId: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
  });

  return { post: data, isLoading, error };
};

export default useGetPosts;
