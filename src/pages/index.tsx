import Layout from "@/layouts/Layout";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { routes } from "./routes";

const Loading = () => <div>Loading...</div>;

const AppRoutes = () => {
  const allRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: routes,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{allRoutes}</Suspense>;
};

export default AppRoutes;
