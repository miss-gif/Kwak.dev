import BasicSpeedDial from "@/components/common/BasicSpeedDial";
import { ThemeProvider } from "@/components/theme-provider";
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalHeader />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
      <BasicSpeedDial />
    </ThemeProvider>
  );
};

export default Layout;
