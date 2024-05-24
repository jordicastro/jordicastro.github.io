import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MainLayout = () => {
  
  const ScrollToTop = () => {
    const { pathname } = useLocation()

      useEffect( () => {
          window.scrollTo(0, 0)
      }, [pathname] )
  }
  ScrollToTop();

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout