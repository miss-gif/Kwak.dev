import ProtectedRoute from "@/routes/ProtectedRoute";
import { lazy } from "react";

const AccountInfoPage = lazy(() => import("./pages/AccountInfoPage"));

export const mypageRoutes = [
  {
    path: "/mypage",
    element: (
      <ProtectedRoute>
        <AccountInfoPage />
      </ProtectedRoute>
    ),
  },
];
