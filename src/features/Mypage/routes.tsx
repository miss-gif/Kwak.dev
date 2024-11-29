import ProtectedRoute from "@/routes/ProtectedRoute";
import { lazy } from "react";

const Mypage = lazy(() => import("./pages/Mypage"));

export const mypageRoutes = [
  {
    path: "/mypage",
    element: (
      <ProtectedRoute>
        <Mypage />
      </ProtectedRoute>
    ),
  },
];
