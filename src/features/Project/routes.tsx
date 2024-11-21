import { lazy } from "react";

const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

const ROUTES = {
  PROJECT: "/project",
  PROJECT_DETAIL: "/project/:id",
};

export const projectRoutes = [
  { path: ROUTES.PROJECT, element: <ProjectPage /> },
  { path: ROUTES.PROJECT_DETAIL, element: <ProjectDetailPage /> },
];
