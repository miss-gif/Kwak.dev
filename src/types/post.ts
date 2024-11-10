interface Post {
  postId: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  createdAt: Date;
  views: number;
  number?: number;
}

export default Post;
