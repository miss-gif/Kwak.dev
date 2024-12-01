import BasicSpeedDial from "@/components/common/BasicSpeedDial";
import Header from "@/layouts/header/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GlobalHeader from "./GlobalHeader";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <GlobalHeader />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
      <BasicSpeedDial />
    </>
  );
};

export default Layout;
