import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useEffect, useState } from "react";

const actions = [
  { icon: <EmailIcon />, name: "Email", path: "/contact" },
  { icon: <ChatIcon />, name: "chat", path: "/chat" },
  { icon: <ShareIcon />, name: "Share", path: "/share" },
];

export default function BasicSpeedDial() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <Box
        onClick={scrollToTop}
        sx={{
          height: 320,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: 0,
          right: 0,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<ArrowUpwardIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => (window.location.href = action.path)}
            />
          ))}
        </SpeedDial>
      </Box>
    )
  );
}
