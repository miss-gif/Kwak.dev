import { linkItems } from "@/mocks/data";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    const matchedItem = linkItems.find((item) => item.path === currentPath);
    setCurrentName(matchedItem ? matchedItem.name : "프로젝트");
  }, [location.pathname]);

  return (
    <div>
      <img
        className="h-40 w-full"
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
        alt="임시"
      />
      <p>{children}</p>
    </div>
  );
};

export default PageTitle;
