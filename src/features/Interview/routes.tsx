import { lazy } from "react";

const InterviewPage = lazy(() => import("./pages/InterviewPage"));

const ROUTES = {
  INTERVIEW: "/interview",
};

export const interviewRoutes = [
  { path: ROUTES.INTERVIEW, element: <InterviewPage /> },
];
