import { lazy } from "react";

const RestrictedPage = lazy(() => import("./pages/RestrictedPage"));

export const restrictedRoutes = [{ path: "/restricted", element: <RestrictedPage /> }];
