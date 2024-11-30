import { lazy } from "react";

const PaymentPage = lazy(() => import("./pages/PaymentPage"));

export const paymentRoutes = [{ path: "/payment", element: <PaymentPage /> }];
