import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

export const homeRoutes = [{ path: "/", element: <HomePage /> }];
