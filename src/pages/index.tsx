import { Suspense, useEffect, useState } from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import BasicSpeedDial from "../components/common/BasicSpeedDial";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { Theme } from "../types/theme";
import AboutPage from "./AboutPage";
import AccountInfoPage from "./AccountInfoPage";
import AdminPage from "./AdminPage";
import BoardPage from "./BoardPage";
import ChartsPage from "./ChartsPage";
import ContactPage from "./ContactPage";
import CreatePostPage from "./CreatePostPage";
import GalleryPage from "./GalleryPage";
import HomePage from "../features/Home/pages/HomePage";
import InterviewPage from "./InterviewPage";
import LoginPage from "./LoginPage";
import MapPage from "./MapPage";
import NotFoundPage from "./NotFoundPage";
import PostDetailPage from "./PostDetailPage";
import PostEditorPage from "./PostEditorPage";
import PreviewPage from "./PreviewPage";
import ProjectDetailPage from "./ProjectDetailPage";
import ProjectPage from "./ProjectPage";
import SchedulePage from "./SchedulePage";
import SignupPage from "./SignupPage";
import { routes } from "./routes";

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
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
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
