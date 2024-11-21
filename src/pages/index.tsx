import Layout from "@/layouts/Layout";
import { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { routes } from "./routes";

const Loading = () => <div>Loading...</div>;

const AppRoutes = () => {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<Loading />}>
      {element}
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
