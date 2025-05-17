import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const PopoverCustom = ({
    handleOpenPopOver,
    isOpen,
    Render,
    sideX,
    sideY,
    triggerIcon,
}: any) => {
    return (
        <Popover open={isOpen} onOpenChange={handleOpenPopOver}>
            <PopoverTrigger asChild>
                {triggerIcon && (triggerIcon)}
            </PopoverTrigger>
            <PopoverContent className="w-50" side={sideX} align={sideY}>
                <Render />
            </PopoverContent>
        </Popover>
    )
};

export default PopoverCustom;