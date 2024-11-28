import PublicRoute from "@/routes/PublicRoute";
import { lazy } from "react";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

export const authRoutes = [
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignupPage />
      </PublicRoute>
    ),
  },
];
