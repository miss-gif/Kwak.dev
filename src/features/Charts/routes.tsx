import { lazy } from "react";

const ChartsPage = lazy(() => import("./pages/ChartsPage"));

const ROUTES = {
  CHARTS: "/charts",
};

export const chartsRoutes = [{ path: ROUTES.CHARTS, element: <ChartsPage /> }];
