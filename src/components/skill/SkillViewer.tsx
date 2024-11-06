import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import Skill from './Skill'
import SkillSet from './SkillSet'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function SkillViewer() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    console.log(event)
  }

  return (
    <>
      <div className="flex justify-center items-center mb-10 mt-3">
        {/* 탭 영역 */}
        <Tabs value={value} onChange={handleChange}>
          <Tab label="SkillSet" {...a11yProps(0)} />
          <Tab label="Skill" {...a11yProps(1)} />
        </Tabs>
      </div>
      {/* 콘텐츠 영역 */}
      <CustomTabPanel value={value} index={0}>
        <SkillSet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Skill />
      </CustomTabPanel>
    </>
  )
}
