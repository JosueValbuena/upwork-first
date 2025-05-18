import { useTheme } from "@/styles/theme-provider";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconMoonOutlinedGray } from "@/utils/icons";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const onDarkModeClick = () => {
    theme === 'dark' && setTheme("light");
    theme === 'light' && setTheme("dark");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconMoonOutlinedGray
            className="mx-2 cursor-pointer"
            {...(theme === 'dark' ? { stroke: '#fff' } : {})}
            onClick={onDarkModeClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Activate / deactivate dark mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}