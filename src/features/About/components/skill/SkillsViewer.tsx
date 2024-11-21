import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import SkillsCanvas from "./SkillsCanvas";
import SkillsList from "./SkillsList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SkillsViewer() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <>
      <div className="mb-10 flex items-center justify-end">
        {/* 탭 영역 */}
        <Tabs value={value} onChange={handleChange}>
          <Tab label="캔버스" {...a11yProps(0)} />
          <Tab label="리스트" {...a11yProps(1)} />
        </Tabs>
      </div>
      {/* 콘텐츠 영역 */}
      <CustomTabPanel value={value} index={0}>
        <SkillsCanvas />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SkillsList />
      </CustomTabPanel>
    </>
  );
}
