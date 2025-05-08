import { Separator } from "@/components/ui/separator"
import { IconMoonOutlinedGray, IconHelpOutlinedGray, IconGearpOutlinedGray, IconBellpOutlinedGray } from '@/utils/icons';
import { ModeToggle } from '../mote-theme-toggle/mode-toggle'
const NavBarWidget = () => {
    return (
        <div className='flex items-center justify-center ml-[auto] bg-violet-100 rounded-3xl h-12 px-3'>
            <IconMoonOutlinedGray className="mx-2 cursor-pointer" />
            <IconHelpOutlinedGray className="mx-2 cursor-pointer" />
            <IconGearpOutlinedGray className="mx-2 cursor-pointer" />
            <IconBellpOutlinedGray className="mx-2 cursor-pointer" />
            <Separator orientation="vertical" className=" mx-3" />
            <ModeToggle />
        </div>
    )
}

export default NavBarWidget