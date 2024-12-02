import useHeaderScroll from "@/hooks/useHeaderScroll";
import { useState } from "react";
import { Link } from "react-router-dom";
import Inner from "../Inner";
import Gnb from "./components/Gnb";
import NavSheet from "./components/NavSheet";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (itemName: string | null) => {
    setSelectedItem(itemName);
  };

  useHeaderScroll();

  return (
    <header className="header blur-40 sticky left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-white bg-opacity-30 transition-shadow duration-300 dark:bg-black dark:bg-opacity-50">
      <Inner>
        <div className="flex w-full items-center justify-between">
          <Link to="/" onClick={() => handleClick(null)}>
            <h1 className="text-2xl font-bold">Kwak.dev</h1>
          </Link>

          <div className="flex gap-2">
            <Gnb selectedItem={selectedItem} handleClick={handleClick} />
            <NavSheet />
          </div>
        </div>
      </Inner>
    </header>
  );
};

export default Header;
