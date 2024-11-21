import BasicSpeedDial from "@/components/common/BasicSpeedDial";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
      <BasicSpeedDial />
    </>
  );
};

export default Layout;
