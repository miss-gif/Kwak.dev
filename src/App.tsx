import { useState, useEffect } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import BoardPage from './pages/BoardPage'
import Header from './components/header/Header'
import Footer from './components/Footer'
import { Theme } from './types/theme'

const Layout = ({ toggleTheme, theme }: Theme) => (
  <>
    <Header toggleTheme={toggleTheme} theme={theme} />
    <Outlet />
    <Footer />
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
        <Route path="board" element={<BoardPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
