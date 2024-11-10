import { Timestamp } from "firebase/firestore";

interface Post {
  postId: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  views: number;
  createdAt: Date | Timestamp;
  likedBy: [string];
}

export default Post;
