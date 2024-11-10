interface Post {
  postId: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  dislikes: number;
  views: number;
  createdAt: any;
  likedBy: [string];
  dislikedBy: [string];
}

export default Post;
