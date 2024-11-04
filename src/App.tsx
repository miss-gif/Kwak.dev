import { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import BasicSpeedDial from './components/common/BasicSpeedDial'
import Footer from './components/Footer'
import Header from './components/header/Header'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import ChartsPage from './pages/ChartsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { Theme } from './types/theme'
import InterviewPage from './pages/InterviewPage'

const Layout = ({ toggleTheme, theme }: Theme) => (
  <>
    <Header toggleTheme={toggleTheme} theme={theme} />
    <Outlet />
    <Footer />
    <BasicSpeedDial />
  </>
)

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} theme={theme} />}
      >
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="interview" element={<InterviewPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="charts" element={<ChartsPage />} />
      </Route>
    </Routes>
  )
}

export default App
