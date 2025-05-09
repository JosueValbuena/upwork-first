import { Separator } from "@/components/ui/separator"
import { IconMoonOutlinedGray, IconHelpOutlinedGray, IconGearpOutlinedGray, IconBellpOutlinedGray, IconUserCircleOutlinedGray } from '@/utils/icons';
import PopoverCustom from "../pop-over-custom/PopOverCustom";
import { useState } from "react";
/* import { ModeToggle } from '../mote-theme-toggle/mode-toggle' */
const NavBarWidget = () => {

    const [isOpen, changePopOverIsOpen] = useState(false);

    const handleOpenPopOver = () => {
        isOpen ? changePopOverIsOpen(false) : changePopOverIsOpen(true)
    };

    return (
        <div className='flex items-center justify-center ml-[auto] bg-violet-100 rounded-3xl h-12 px-3'>
            <IconMoonOutlinedGray className="mx-2 cursor-pointer" />
            <IconHelpOutlinedGray className="mx-2 cursor-pointer" />
            <IconGearpOutlinedGray className="mx-2 cursor-pointer" />
            <IconBellpOutlinedGray className="mx-2 cursor-pointer" />
            <Separator orientation="vertical" className=" mx-3" />
            <PopoverCustom
                triggerIcon={<IconUserCircleOutlinedGray className="mx-2 w-6 cursor-pointer" />}
                isOpen={isOpen}
                handleOpenPopOver={handleOpenPopOver}
            />
            {/* <ModeToggle /> */}
        </div>
    )
}

export default NavBarWidget