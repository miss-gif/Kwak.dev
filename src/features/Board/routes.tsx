import { lazy } from "react";

const BoardPage = lazy(() => import("./pages/BoardPage"));
const CreatePostPage = lazy(() => import("./pages/CreatePostPage"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));
const PostEditorPage = lazy(() => import("./pages/PostEditorPage"));

const ROUTES = {
  BOARD: "/board",
  POST_WRITE: "/post/write",
  POST_DETAIL: "/post/:postId",
  POST_EDIT: "/post/:postId/edit",
};

export const boardRoutes = [
  { path: ROUTES.BOARD, element: <BoardPage /> },
  { path: ROUTES.POST_WRITE, element: <CreatePostPage /> },
  { path: ROUTES.POST_DETAIL, element: <PostDetailPage /> },
  { path: ROUTES.POST_EDIT, element: <PostEditorPage /> },
];
