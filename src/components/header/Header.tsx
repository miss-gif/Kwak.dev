import Container from "@/components/common/Container";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import { Theme } from "@/types/theme";
import { linkItems } from "@mocks/data";
import { capitalizeFirstLetter } from "@utils/utils";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import BasicButtons from "../common/Button";
import NavToggle from "./NavToggle";
import ToggleThemeSwitch from "./ToggleThemeSwitch";
import { useAuthStore } from "../stores/authStore";

const Header = ({ toggleTheme }: Theme) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoggedIn, logout } = useAuthStore();

  const handleClick = (itemName: string | null) => {
    setSelectedItem(itemName);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useHeaderScroll();

  return (
    <header className="header fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between transition-shadow duration-300">
      <Container>
        <div className="flex w-full items-center justify-between">
          <Link to={"/"} onClick={() => handleClick(null)}>
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {linkItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={classNames("hover:text-blue-600", {
                      "font-bold": selectedItem === item.name,
                    })}
                    onClick={() => handleClick(item.name)}
                  >
                    {capitalizeFirstLetter(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-2 md:gap-2">
              {isLoggedIn ? (
                <>
                  <Link to={"/accountinfo"}>{user?.email}</Link>
                  <button onClick={logout}>로그아웃</button>
                </>
              ) : (
                <Link to="login" onClick={() => handleClick(null)}>
                  <BasicButtons>로그인</BasicButtons>
                </Link>
              )}
              <ToggleThemeSwitch onClick={toggleTheme} />
            </div>
            <NavToggle
              toggleDrawer={toggleDrawer}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
