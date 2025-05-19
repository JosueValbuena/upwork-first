import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setThemeMode } from "@/store/features/theme-mode/themeModeSlice";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconMoonOutlinedGray } from "@/utils/icons";

export function ModeToggle() {
  const { theme } = useAppSelector(state => state.themeMode);
  const dispatch = useAppDispatch();

  const onDarkModeClick = () => {
    theme === 'dark' && dispatch(setThemeMode('light'));
    theme === 'light' && dispatch(setThemeMode('dark'));
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