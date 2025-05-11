import { navigationLinks } from "@/utils/constants"
import { NavLink } from "react-router-dom"

const NavbarLinks = () => {
  return (
    <div className="pl-18 flex flex-col lg:flex-row">
      {navigationLinks.map(element => (
        <NavLink
          key={element.label}
          to={element.path}
          className={({ isActive }) =>
            `px-3 font-semibold text-xs transition-colors py-[.65rem] 
          ${isActive ? 'text-purple-600 lg:border-b-2 md:border-purple-500' : 'text-neutral-400'}
          hover:text-gray-600 hover:border-b-2 hover:border-gray-500
          `}
        >
          {element.label}
        </NavLink>
      ))}
    </div>
  )
}
/* pb-[1rem] */
export default NavbarLinks