import { Route, Routes, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
