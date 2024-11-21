import { Suspense, useEffect, useState } from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import BasicSpeedDial from "../components/common/BasicSpeedDial";
import Header from "../components/header/Header";
import AdminPage from "../features/Admin/pages/AdminPage";
import LoginPage from "../features/Auth/pages/LoginPage";
import SignupPage from "../features/Auth/pages/SignupPage";
import ChartsPage from "../features/Charts/pages/ChartsPage";
import GalleryPage from "../features/Gallery/pages/GalleryPage";
import MapPage from "../features/Map/pages/MapPage";
import AccountInfoPage from "../features/Mypage/pages/AccountInfoPage";
import PreviewPage from "../features/Preview/pages/PreviewPage";
import SchedulePage from "../features/Schedule/pages/SchedulePage";
import Footer from "../layouts/Footer";
import { Theme } from "../types/theme";
import NotFoundPage from "./NotFoundPage";
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
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="charts" element={<ChartsPage />} />
          <Route path="preview" element={<PreviewPage />} />
          <Route path="map" element={<MapPage />} />
          {/* auth */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="mypage" element={<AccountInfoPage />} />

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
