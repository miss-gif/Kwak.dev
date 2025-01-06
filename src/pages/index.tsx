import { PreviewPage } from "@/features/Preview";
import AuthLayout from "@/layouts/AuthLayout";
import Layout from "@/layouts/Layout";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingPage from "@/pages/LoadingPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { privateRoutes, routes } from "@/pages/routes";

const PublicChat = lazy(() => import("@/features/Chat/components/PublicChat"));
const TestChatWindow = lazy(() => import("@/components/ChatWindow/ChatWindow"));

const Loading = () => <LoadingPage />;

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
    {
      path: "/new/chat",
      element: <PublicChat />,
    },
    {
      path: "/test",
      element: <TestChatWindow />,
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
