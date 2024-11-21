import { Suspense, useEffect, useState } from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import BasicSpeedDial from "../components/common/BasicSpeedDial";
import Header from "../components/header/Header";
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
        ></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
