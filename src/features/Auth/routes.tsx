import { lazy } from "react";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

export const authRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
];
