import { lazy } from "react";

const MapPage = lazy(() => import("./pages/MapPage"));

const ROUTES = {
  MAP: "/map",
};

export const mapRoutes = [{ path: ROUTES.MAP, element: <MapPage /> }];
