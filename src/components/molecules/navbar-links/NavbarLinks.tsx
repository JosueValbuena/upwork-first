import { navigationLinks } from "@/utils/constants"
import { NavLink } from "react-router-dom"

const NavbarLinks = () => {
  return (
    <div className="pl-18">
      {navigationLinks.map(element => (
        <NavLink
          key={element.label}
          to={element.path}
          className={({ isActive }) =>
            `px-3 font-semibold text-xs transition-colors pb-[1rem]
          ${isActive ? 'text-purple-600 border-b-2 border-purple-500' : 'text-neutral-400'}
          hover:text-gray-600 hover:border-b-2 hover:border-gray-500
          `}
        >
          {element.label}
        </NavLink>
      ))}
    </div>
  )
}

export default NavbarLinks