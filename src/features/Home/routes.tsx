import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

const ROUTES = {
  HOME: "/",
};

export const homeRoutes = [{ path: ROUTES.HOME, element: <HomePage /> }];
