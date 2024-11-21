import { lazy } from "react";

const ContactPage = lazy(() => import("./pages/ContactPage"));

const ROUTES = {
  CONTACT: "/contact",
};

export const contactRoutes = [
  { path: ROUTES.CONTACT, element: <ContactPage /> },
];
