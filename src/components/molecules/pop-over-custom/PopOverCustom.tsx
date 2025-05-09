import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { NavLink } from "react-router-dom";

const PopoverCustom = ({ handleOpenPopOver, isOpen, triggerIcon }: any) => {
    return (
        <Popover open={isOpen} onOpenChange={handleOpenPopOver}>
            <PopoverTrigger asChild>
                {triggerIcon}
            </PopoverTrigger>
            <PopoverContent className="w-45" side="right" align="start">
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
            </PopoverContent>
        </Popover>
    )
};

export default PopoverCustom;