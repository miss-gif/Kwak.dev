import { PreviewPage } from "@/features/Preview";
import AuthLayout from "@/layouts/AuthLayout";
import Layout from "@/layouts/Layout";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import NotFoundPage from "./NotFoundPage";
import { privateRoutes, routes } from "./routes";

const LoginPage = lazy(() => import("../components/ChatWindow/ChatWindow"));

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
      element: <LoginPage />,
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
