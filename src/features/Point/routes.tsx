import { lazy } from "react";

const PointPage = lazy(() => import("./pages/PointPage"));

export const pointRoutes = [{ path: "/point", element: <PointPage /> }];
