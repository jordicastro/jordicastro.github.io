import { NavLink } from "react-router-dom"
import webappLogo from '../assets/webapp.svg'
import NavButton from './NavButton'


const Navbar = () => {

    const navButtons = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'projects',
            link: '/projects'
        },
        {
            name: 'about',
            link: '/about'
        }
    ]

    return (
        <nav
            className="flex justify-between items-center bg-[#302A67] w-full h-auto p-4 text-white rounded-b-xl"
        >

            <div
                className="flex justify-center items-center gap-x-3"
            >
                <NavLink to='/'>
                    <img
                        src={webappLogo} alt="Logo"
                        className="w-8 h-8 sm:w-12 sm:h-12 transition-all duration-500 ease-in-out transform hover:scale-105 hover:duration-300 hover:delay-100"
                    />
                </NavLink>

                <p
                    className="text-sm sm:text-lg font-medium transition-all duration-500 ease-in-out transform"
                >
                    jordi.dev
                </p>
            </div>

            <section
                className="flex justify-center items-center gap-x-3"
            >
                {navButtons.map((button, index) => (
                    <NavButton key={index} button={button} />
                ))}
            </section>
        </nav>
  )
}

export default Navbar