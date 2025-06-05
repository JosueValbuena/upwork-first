import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipPortal } from "@radix-ui/react-tooltip"

interface TooltipCustom {
    title: any,
    trigger: any
};

const TooltipCustom = ({ title, trigger }: TooltipCustom) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        {trigger}
                    </div>
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipContent>
                        {title}
                    </TooltipContent>
                </TooltipPortal>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipCustom