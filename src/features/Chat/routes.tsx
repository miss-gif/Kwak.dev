import { lazy } from "react";

const ChatPage = lazy(() => import("./pages/ChatPage"));

export const chatRoutes = [{ path: "chat", element: <ChatPage /> }];
