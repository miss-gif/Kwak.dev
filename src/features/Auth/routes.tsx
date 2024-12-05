import PublicRoute from "@/routes/PublicRoute";
import { lazy } from "react";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const FinishSignupPage = lazy(() => import("./pages/FinishSignupPage"));

export const authRoutes = [
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <PublicRoute>
        <SignupPage />
      </PublicRoute>
    ),
  },
  {
    path: "fin-signup",
    element: (
      <PublicRoute>
        <FinishSignupPage />
      </PublicRoute>
    ),
  },
];
