import { Timestamp } from "firebase/firestore";

export interface PostData {
  id?: number;
  docID: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  views: number;
  createdAt: Date | Timestamp;
  likedBy: [string];
  dislikedBy: [string];
}
