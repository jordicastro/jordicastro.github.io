import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface NavButtonProps {
    button: {
        name: string
        link: string
    }
}

const NavButton = ({button}: NavButtonProps) => {
    const isActive = window.location.pathname === button.link

    return (
        <NavLink
            to={button.link}
            className={twMerge(
                `text-xs sm:text-base sm:font-medium  bg-[#8080D7] hover:bg-transparent border-2 border-transparent hover:border-[#8080D7] hover:duration-100 px-2 py-1 sm:px-3 sm:py-2 rounded-md transition-all duration-500 ease-in-out`,
                isActive ? 'bg-transparent border-2 border-[#8080D7] duration-500 ease-in-out' : 'bg-[#8080D7]'
            )}
        >
            {button.name}
        </NavLink>
    )
}

export default NavButton