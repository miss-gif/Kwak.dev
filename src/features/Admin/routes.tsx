import { lazy } from "react";

const AdminPage = lazy(() => import("./pages/AdminPage"));

const ROUTES = {
  ADMIN: "/admin",
};

export const adminRoutes = [{ path: ROUTES.ADMIN, element: <AdminPage /> }];
