interface Post {
  postId: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  views: number;
  createdAt: Date;
  likedBy: [string];
}

export default Post;
