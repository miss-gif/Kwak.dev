import { useState } from "react";
import NavToggle from "./NavToggle";

const HeaderActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-2">
      <NavToggle toggleDrawer={toggleDrawer} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeaderActions;
