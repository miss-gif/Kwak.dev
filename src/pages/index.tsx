import AuthLayout from "@/layouts/AuthLayout";
import Layout from "@/layouts/Layout";
import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { privateRoutes, routes } from "./routes";

const LoginPage = lazy(() => import("../components/ChatWindow/ChatWindow"));

const Loading = () => <CircularProgress />;

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
      path: "new/chat",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{allRoutes}</Suspense>;
};

export default AppRoutes;
