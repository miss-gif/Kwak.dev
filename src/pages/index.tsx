import Layout from "@/layouts/Layout";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { privateRoutes, routes } from "./routes";
import AuthLayout from "@/layouts/AuthLayout";

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
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{allRoutes}</Suspense>;
};

export default AppRoutes;
