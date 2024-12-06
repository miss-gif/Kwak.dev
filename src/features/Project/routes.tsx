import ProtectedRoute from "@/routes/ProtectedRoute";
import { lazy } from "react";

const ProjectPage = lazy(() => import("./pages"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ProjectAddPage = lazy(() => import("./pages/ProjectAddPage"));
const ProjectEditPage = lazy(() => import("./pages/ProjectEditPage"));

export const projectRoutes = [
  { path: "/project", element: <ProjectPage /> },
  { path: "/project/:id", element: <ProjectDetailPage /> },

  {
    path: "/project/add",
    element: (
      <ProtectedRoute>
        <ProjectAddPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/project/:id/edit",
    element: <ProjectEditPage />,
  },
];
