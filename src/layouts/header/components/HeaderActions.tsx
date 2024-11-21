import BasicButton from "@/components/common/Button";
import UserModal from "@/components/common/UserModal";
import { useAuthStore } from "@/stores/authStore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleThemeSwitch from "../ToggleThemeSwitch";
import NavToggle from "./NavToggle";

interface HeaderActionsProps {
  handleClick: (itemName: string | null) => void;
  toggleTheme: () => void;
}

const HeaderActions = ({ handleClick, toggleTheme }: HeaderActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const navigeit = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-2">
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
  );
};

export default HeaderActions;
