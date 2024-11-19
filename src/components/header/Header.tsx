import Container from "@/components/common/Container";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import { Theme } from "@/types/theme";
import { linkItems } from "@mocks/data";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { capitalizeFirstLetter } from "@utils/utils";
import classNames from "classnames";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserModal from "../common/UserModal";
import BasicButton from "../common/Button";
import { useAuthStore } from "../stores/authStore";
import NavToggle from "./NavToggle";
import ToggleThemeSwitch from "./ToggleThemeSwitch";

const Header = ({ toggleTheme }: Theme) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const navigeit = useNavigate();

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
          <a href="/" onClick={() => handleClick(null)}>
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </a>

          <nav className="hidden lg:block">
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
                <UserModal
                  title={<AccountCircleIcon sx={{ fontSize: 40 }} />}
                  logout={<BasicButton title="로그아웃" onClick={logout} />}
                  link={
                    <BasicButton
                      title="마이페이지"
                      onClick={() => {
                        navigeit("/mypage");
                        handleClick(null);
                      }}
                    />
                  }
                />
              ) : (
                <Link to="login" onClick={() => handleClick(null)}>
                  <BasicButton title="로그인" />
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
