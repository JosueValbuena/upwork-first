import { NavbarLinks, NavBarWidget } from "@/components/molecules"

const NavBar = () => {
    return (
        <nav className="flex flex-row h-16 max-w-[1536px] justify-center mx-auto items-center bg-white px-10 max-w-s">
            <div className="text-xl font-semibold">Logo</div>

            <NavbarLinks />

            <NavBarWidget />
        </nav>
    )
}

export default NavBar