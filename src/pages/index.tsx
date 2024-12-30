import { PreviewPage } from "@/features/Preview";
import AuthLayout from "@/layouts/AuthLayout";
import Layout from "@/layouts/Layout";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import NotFoundPage from "./NotFoundPage";
import { privateRoutes, routes } from "./routes";

const PublicChat = lazy(() => import("../features/Chat/components/PublicChat")); // 채팅 페이지
const TEST = lazy(() => import("../components/ChatWindow/ChatWindow"));

const Loading = () => <LoadingPage />; // 로딩 페이지

const AppRoutes = () => {
  const allRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: routes,
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: privateRoutes,
    },
    // layout이 적용되지 않는 페이지
    {
      path: "/new/chat",
      element: <PublicChat />,
    },
    {
      path: "/test",
      element: <TEST />,
    },
    {
      path: "preview",
      element: <PreviewPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{allRoutes}</Suspense>;
};

export default AppRoutes;
