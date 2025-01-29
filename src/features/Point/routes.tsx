import ProtectedRoute from "@/routes/ProtectedRoute";
import { lazy } from "react";

const PointPage = lazy(() => import("./pages/PointPage"));

export const pointRoutes = [
  {
    path: "/point",
    element: (
      <ProtectedRoute>
        <PointPage />
      </ProtectedRoute>
    ),
  },
];
