import { AboutPage } from "@/features/About";
import AdminMainPage from "@/features/Admin/pages/AdminMainPage";
import { BoardPage } from "@/features/Board";
import { ChartsPage } from "@/features/Charts";
import ChatPage from "@/features/Chat/pages/ChatPage";
import { ContactPage } from "@/features/Contact";
import { GalleryPage } from "@/features/Gallery";
import { HomePage } from "@/features/Home";
import { InterviewPage } from "@/features/Interview";
import { PointPage } from "@/features/Point";
import { SchedulePage } from "@/features/Schedule";
import { TimelinePage } from "@/features/Timeline";
import "./style.css";

const pages = [
  { component: HomePage, className: "face1" },
  { component: AboutPage, className: "face2" },
  { component: InterviewPage, className: "face3" },
  { component: TimelinePage, className: "face4" },
  { component: GalleryPage, className: "face5" },
  { component: ChartsPage, className: "face6" },
  { component: ContactPage, className: "face7" },
  { component: BoardPage, className: "face8" },
  { component: BoardPage, className: "face9" },
  { component: SchedulePage, className: "face10" },
  { component: SchedulePage, className: "face11" },
  { component: PointPage, className: "face12" },
  { component: ChatPage, className: "face13" },
  { component: AdminMainPage, className: "face14" },
];

const Preview = () => {
  return (
    <main className="wrap">
      <video src="/src/assets/video/bg.mp4" loop muted />
      <div className="h-dvh w-full bg-neutral-900"></div>
      <section id="circle">
        {pages.map(({ component: PageComponent, className }, index) => (
          <article key={index} className={className}>
            <PageComponent />
          </article>
        ))}
      </section>
    </main>
  );
};

export default Preview;
