import { homeRoutes } from "../features/Home";
// 작업중
import { aboutRoutes } from "../features/About";
import { adminRoutes } from "../features/Admin";
import { authRoutes } from "../features/Auth";
import { boardRoutes } from "../features/Board";
import { contactRoutes } from "../features/Contact";
import { galleryRoutes } from "../features/Gallery";
import { interviewRoutes } from "../features/Interview";
import { mapRoutes } from "../features/Map";
import { paymentRoutes } from "../features/Payment";
import { projectRoutes } from "../features/Project";
import { scheduleRoutes } from "../features/Schedule";
import { previewRoutes } from "../features/Preview";
import { chartsRoutes } from "../features/Charts";

export const routes = [
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
];
