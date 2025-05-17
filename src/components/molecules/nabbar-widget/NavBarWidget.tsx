import { Separator } from "@/components/ui/separator"
import {
    IconHelpOutlinedGray, IconGearpOutlinedGray, IconBellpOutlinedGray,
    IconUserCircleOutlinedGray
} from '@/utils/icons';
import PopoverCustom from "../pop-over-custom/PopOverCustom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from '../mote-theme-toggle/mode-toggle'
import { useTheme } from "@/styles/theme-provider";
import SortModeToggler from "../sort-mode-toggler/SortModeToggler";
import { NavLink } from "react-router-dom";

const NavBarWidget = () => {

    const [isOpen, changePopOverIsOpen] = useState(false);
    const { theme } = useTheme();

    const handleOpenPopOver = () => {
        isOpen ? changePopOverIsOpen(false) : changePopOverIsOpen(true)
    };

    const RenderComponent = () => {
        return (
            <div className="grid gap-4">
                <div className="space-y-2">
                    <NavLink
                        to={'/account-settings'}
                        className=' hover:text-gray-500 hover:font-semibold'
                        onClick={handleOpenPopOver}
                    >
                        Account Settings
                    </NavLink>
                </div>
            </div>
        )
    };

    return (
        <div className='flex items-center justify-center bg-primary-light rounded-3xl h-8 px-3 md:ml-[auto]'>

            <SortModeToggler />

            <ModeToggle />
            <IconHelpOutlinedGray
                className="mx-2 cursor-pointer text-foreground"
                stroke={theme === 'dark' ? '#fff' : ''}
            />
            <Link to={'/settings'}>
                <IconGearpOutlinedGray
                    className="mx-2 cursor-pointer"
                    {...(theme === 'dark' ? { fill: '#fff' } : {})}
                />
            </Link>
            <IconBellpOutlinedGray
                className="mx-2 cursor-pointer"
                stroke={'#fff'}
                {...(theme === 'dark' ? { fill: '#fff' } : {})}
            />
            <Separator orientation="vertical" className=" mx-3" />
            <PopoverCustom
                handleOpenPopOver={handleOpenPopOver}
                isOpen={isOpen}
                Render={RenderComponent}
                sideX={'right'}
                sideY={'start'}
                triggerIcon={
                    <IconUserCircleOutlinedGray
                        className="mx-2 w-5 cursor-pointer"
                        {...(theme === 'dark' ? { fill: '#fff' } : {})}
                    />}
            />
        </div >
    )
}

export default NavBarWidget