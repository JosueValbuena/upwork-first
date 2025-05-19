import { NavbarLinks, NavBarWidget } from "@/components/molecules"
import MobileDraweMenu from "../mobile-drawe-menu/MobileDrawerMenu"
import { IconNavOpenOutlinedGray } from "@/utils/icons"
import { useState } from "react"

const NavBar = () => {

    const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

    const onToggleNavBar = () => {
        setIsNavMobileOpen(prevValue => !prevValue)
    };

    return (
        <nav className="
        flex justify-between flex-row h-10 mx-auto items-center 
        bg-background-secondary-customized px-10 w-full 
        lg:justify-center z-100">
            <div className="text-xl font-semibold">Logo</div>

            <div className="hidden lg:contents">
                <NavbarLinks />
            </div>

            <div className="hidden  lg:contents">
                <NavBarWidget />
            </div>

            <div className="lg:hidden">
                <IconNavOpenOutlinedGray
                    className="w-4"
                    onClick={onToggleNavBar}
                />
            </div>
            <MobileDraweMenu isOpen={isNavMobileOpen} onToggleNav={onToggleNavBar} />
        </nav>
    )
}

export default NavBar