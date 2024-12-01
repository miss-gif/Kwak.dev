import Button from "@/components/Button";
import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";
import ToggleThemeSwitch from "../ToggleThemeSwitch";
import NavToggle from "./NavToggle";

interface HeaderActionsProps {
  handleClick: (itemName: string | null) => void;
  toggleTheme: () => void;
}

const HeaderActions = ({ toggleTheme }: HeaderActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdminAuthenticated, clearAdminAuthCookie } = useAdminAuthCookie();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 md:gap-2">
        {isAdminAuthenticated() ? (
          <Button label={<AdminPanelSettings sx={{ fontSize: 40 }} />} color="transparent" text="inherit" onClick={() => clearAdminAuthCookie()} />
        ) : (
          ""
        )}
        <ToggleThemeSwitch onClick={toggleTheme} />
      </div>
      <NavToggle toggleDrawer={toggleDrawer} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeaderActions;
