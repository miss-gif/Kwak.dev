import ProtectedRoute from "@/routes/ProtectedRoute";
import { lazy } from "react";

const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage"));

const ROUTES = {
  ADMIN: "/admin",
};

export const adminRoutes = [
  {
    path: ROUTES.ADMIN,
    element: (
      <ProtectedRoute>
        <AdminLoginPage />
      </ProtectedRoute>
    ),
  },
];
