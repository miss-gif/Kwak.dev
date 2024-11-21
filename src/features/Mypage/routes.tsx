import { lazy } from "react";

const AccountInfoPage = lazy(() => import("./pages/AccountInfoPage"));

const ROUTES = {
  MYPAGE: "/mypage",
};

export const mypageRoutes = [
  { path: ROUTES.MYPAGE, element: <AccountInfoPage /> },
];
