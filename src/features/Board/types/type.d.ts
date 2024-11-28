import { Timestamp } from "firebase/firestore";

export interface PostData {
  uid: string;
  id?: number;
  docID: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  views: number;
  createdAt: Date | Timestamp | any;
  likedBy: [string];
  dislikedBy: [string];
}
