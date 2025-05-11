import { Separator } from "@/components/ui/separator"
import { IconMoonOutlinedGray, IconHelpOutlinedGray, IconGearpOutlinedGray, IconBellpOutlinedGray, IconUserCircleOutlinedGray } from '@/utils/icons';
import PopoverCustom from "../pop-over-custom/PopOverCustom";
import { useState } from "react";
import { Link } from "react-router-dom";
/* import { ModeToggle } from '../mote-theme-toggle/mode-toggle' */
const NavBarWidget = () => {

    const [isOpen, changePopOverIsOpen] = useState(false);

    const handleOpenPopOver = () => {
        isOpen ? changePopOverIsOpen(false) : changePopOverIsOpen(true)
    };

    return (
        <div className='flex items-center justify-center bg-primary-light rounded-3xl h-8 px-3 md:ml-[auto]'>
            <IconMoonOutlinedGray className="mx-2 cursor-pointer" />
            <IconHelpOutlinedGray className="mx-2 cursor-pointer" />
            <Link to={'/settings'}>
                <IconGearpOutlinedGray className="mx-2 cursor-pointer" />
            </Link>
            <IconBellpOutlinedGray className="mx-2 cursor-pointer" />
            <Separator orientation="vertical" className=" mx-3" />
            <PopoverCustom
                triggerIcon={<IconUserCircleOutlinedGray className="mx-2 w-5 cursor-pointer" />}
                isOpen={isOpen}
                handleOpenPopOver={handleOpenPopOver}
            />
            {/* <ModeToggle /> */}
        </div>
    )
}

export default NavBarWidget