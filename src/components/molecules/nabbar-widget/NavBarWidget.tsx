import { Separator } from "@/components/ui/separator"


import { IconMoonOutlinedGray, IconHelpOutlinedGray, IconGearpOutlinedGray, IconBellpOutlinedGray } from '@/utils/icons';
/* import { ModeToggle } from '../mote-theme-toggle/mode-toggle' */
const NavBarWidget = () => {
    return (
        <div className='flex items-center justify-center ml-[auto] bg-violet-100 rounded-2xl h-12 px-3'>
            <IconMoonOutlinedGray className="mx-2" />
            <IconHelpOutlinedGray className="mx-2" />
            <IconGearpOutlinedGray className="mx-2" />
            <IconBellpOutlinedGray className="mx-2" />
            <Separator orientation="vertical" className=" mx-3" />
            <IconBellpOutlinedGray className="mx-2"/>
        </div>
    )
}

export default NavBarWidget