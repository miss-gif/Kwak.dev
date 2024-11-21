import { lazy } from "react";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const ROUTES = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
};

export const authRoutes = [
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.SIGNUP, element: <SignupPage /> },
];
