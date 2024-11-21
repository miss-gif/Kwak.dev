import { lazy } from "react";

const PaymentPage = lazy(() => import("./pages/PaymentPage"));

const ROUTES = {
  PAYMENT: "/payment",
};

export const paymentRoutes = [
  { path: ROUTES.PAYMENT, element: <PaymentPage /> },
];
