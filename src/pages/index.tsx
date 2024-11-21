import { Suspense, useEffect, useState } from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import BasicSpeedDial from "../components/common/BasicSpeedDial";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { Theme } from "../types/theme";
import AccountInfoPage from "../features/Mypage/pages/AccountInfoPage";
import AdminPage from "../features/Admin/pages/AdminPage";
import BoardPage from "../features/Board/pages/BoardPage";
import ChartsPage from "../features/Charts/pages/ChartsPage";
import ContactPage from "../features/Contact/pages/ContactPage";
import CreatePostPage from "../features/Board/pages/CreatePostPage";
import GalleryPage from "../features/Gallery/pages/GalleryPage";
import InterviewPage from "../features/Interview/pages/InterviewPage";
import LoginPage from "../features/Auth/pages/LoginPage";
import MapPage from "../features/Map/pages/MapPage";
import NotFoundPage from "./NotFoundPage";
import PostDetailPage from "../features/Board/pages/PostDetailPage";
import PostEditorPage from "../features/Board/pages/PostEditorPage";
import PreviewPage from "../features/Preview/pages/PreviewPage";
import ProjectDetailPage from "../features/Project/pages/ProjectDetailPage";
import ProjectPage from "../features/Project/pages/ProjectPage";
import { routes } from "./routes";
import SchedulePage from "../features/Schedule/pages/SchedulePage";
import SignupPage from "../features/Auth/pages/SignupPage";

const Loading = () => <div>Loading...</div>;

const Layout = ({ toggleTheme, theme }: Theme) => (
  <>
    <Header toggleTheme={toggleTheme} theme={theme} />
    <Outlet />
    <Footer />
    <BasicSpeedDial />
  </>
);

const AppRoutes = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const element = useRoutes(routes);
  return (
    <Suspense fallback={<Loading />}>
      {element}
      <Routes>
        <Route
          path="/"
          element={<Layout toggleTheme={toggleTheme} theme={theme} />}
        >
          <Route path="project" element={<ProjectPage />} />
          <Route path="project/:id" element={<ProjectDetailPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="charts" element={<ChartsPage />} />
          <Route path="preview" element={<PreviewPage />} />
          <Route path="map" element={<MapPage />} />
          {/* auth */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="mypage" element={<AccountInfoPage />} />

          {/* 게시판 */}
          <Route path="board" element={<BoardPage />} />
          <Route path="post/write" element={<CreatePostPage />} />
          <Route path="post/:postId" element={<PostDetailPage />} />
          <Route path="post/:postId/edit" element={<PostEditorPage />} />
          {/* 관리자 */}
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
