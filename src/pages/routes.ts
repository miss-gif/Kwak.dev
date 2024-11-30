import { aboutRoutes } from "../features/About";
import { adminRoutes } from "../features/Admin";
import { authRoutes } from "../features/Auth";
import { boardRoutes } from "../features/Board";
import { chartsRoutes } from "../features/Charts";
import { contactRoutes } from "../features/Contact";
import { galleryRoutes } from "../features/Gallery";
import { homeRoutes } from "../features/Home";
import { interviewRoutes } from "../features/Interview";
import { mapRoutes } from "../features/Map";
import { mypageRoutes } from "../features/Mypage";
import { paymentRoutes } from "../features/Payment";
import { previewRoutes } from "../features/Preview";
import { projectRoutes } from "../features/Project";
import { scheduleRoutes } from "../features/Schedule";
import { timelineRoutes } from "../features/Timeline";
import { chatRoutes } from "../features/Chat";
import { pointRoutes } from "../features/Point";

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
  ...mypageRoutes,
  ...timelineRoutes,
  ...chartsRoutes,
  ...chatRoutes,
  ...pointRoutes,
];
