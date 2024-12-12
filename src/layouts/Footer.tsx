import Visitors from "@/components/Visitors";
import { Link } from "react-router-dom";
import Inner from "./Inner";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="absolute mt-20 grid w-full bg-neutral-50 py-4 dark:bg-neutral-950">
      <Inner className="flex items-center justify-between">
        <p className="text-sm">ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
        <Link to="/charts" className="hover:text-blue-500">
          <Visitors />
        </Link>
      </Inner>
    </footer>
  );
};

export default Footer;
