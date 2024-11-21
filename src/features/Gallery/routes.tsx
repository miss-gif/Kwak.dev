import { lazy } from "react";

const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const ROUTES = {
  GALLERY: "/gallery",
};

export const galleryRoutes = [
  { path: ROUTES.GALLERY, element: <GalleryPage /> },
];
