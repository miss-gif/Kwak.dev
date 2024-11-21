import { homeRoutes } from "../features/Home";
import { aboutRoutes } from "../features/About";
import { projectRoutes } from "../features/Project";
import { interviewRoutes } from "../features/Interview";
import { contactRoutes } from "../features/Contact";
import { boardRoutes } from "../features/Board";
import { chartsRoutes } from "../features/Charts";
import { scheduleRoutes } from "../features/Schedule";
import { authRoutes } from "../features/Auth";
import { galleryRoutes } from "../features/Gallery";
import { mapRoutes } from "../features/Map";
import { paymentRoutes } from "../features/Payment";
import { previewRoutes } from "../features/Preview";
import { timelineRoutes } from "../features/Timeline";
import { adminRoutes } from "../features/Admin";
import { mypageRoutes } from "../features/Mypage";
import { ReactNode } from "react";

interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  ...aboutRoutes,
  ...adminRoutes,
  ...authRoutes,
  ...boardRoutes,
  ...contactRoutes,
  ...galleryRoutes,
  ...homeRoutes,
  ...interviewRoutes,
  ...mapRoutes,
  ...paymentRoutes,
  ...projectRoutes,
  ...scheduleRoutes,
  ...previewRoutes,
  ...chartsRoutes,
  ...mypageRoutes,
  ...timelineRoutes,
];
