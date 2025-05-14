/* import { Button } from "@/components/ui/button" */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/styles/theme-provider"
import { IconMoonOutlinedGray, /* IconSunContainedBlack */ } from "@/utils/icons"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <IconMoonOutlinedGray
          className="mx-2 cursor-pointer"
          {...(theme === 'dark' ? { stroke: '#fff' } : {})}
        />

        {/* <Button variant="outline" size="icon" className="none">
          {theme === 'light' ? (
            <IconMoonOutlinedGray 
            className="mx-2 cursor-pointer" 
            />
          ) : (
            <IconSunContainedBlack 
            className="mx-2 cursor-pointer" 
            stroke={theme === 'dark' ? '#fff' : ''}
            />
          )}
        </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}