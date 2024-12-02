import Container from "@/components/common/Container";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import { Theme } from "@/types/theme";
import { useState } from "react";
import { Link } from "react-router-dom";
import Gnb from "./components/Gnb";
import HeaderActions from "./components/HeaderActions";

const Header = ({ toggleTheme }: Theme) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClick = (itemName: string | null) => {
    setSelectedItem(itemName);
  };

  useHeaderScroll();

  return (
    <header className="sticky left-0 top-0 z-50 flex h-20 w-full items-center justify-between transition-shadow duration-300">
      <Container>
        <div className="flex w-full items-center justify-between">
          <Link to="/" onClick={() => handleClick(null)}>
            <h1 className="text-2xl font-bold">Kwak.dev</h1>
          </Link>
          <Gnb selectedItem={selectedItem} handleClick={handleClick} />
          <HeaderActions handleClick={handleClick} toggleTheme={toggleTheme} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
