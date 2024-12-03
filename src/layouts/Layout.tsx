import GlobalSpeedDial from "@/components/GlobalSpeedDial";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/layouts/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GlobalHeader from "./GlobalHeader";

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalHeader />
      <Header />
      <Outlet />
      <Footer />
      <GlobalSpeedDial />
    </ThemeProvider>
  );
};

export default Layout;
