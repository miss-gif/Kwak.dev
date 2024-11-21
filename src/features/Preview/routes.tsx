import { lazy } from "react";

const PreviewPage = lazy(() => import("./pages/PreviewPage"));

const ROUTES = {
  PREVIEW: "/preview",
};

export const previewRoutes = [
  { path: ROUTES.PREVIEW, element: <PreviewPage /> },
];
