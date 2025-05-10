import {
    Sheet,
    /* SheetClose, */
    SheetContent,
    SheetDescription,
    /* SheetFooter, */
    SheetHeader,
    SheetTitle,
    /* SheetTrigger, */
} from "@/components/ui/sheet"

import { NavbarLinks, NavBarWidget } from "@/components/molecules"

interface MobileDraweMenu {
    isOpen: any
    onToggleNav: any
}

const MobileDraweMenu = ({ isOpen, onToggleNav }: MobileDraweMenu) => {
    return (
        <Sheet open={isOpen} onOpenChange={onToggleNav}>
            {/* <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger> */}
            <SheetContent className="w-[250px]">
                <SheetHeader>
                    <SheetTitle>
                        <div className="text-xl font-semibold">Logo</div>
                    </SheetTitle>
                    <SheetDescription>
                        {/* Make changes to your profile here. Click save when you're done. */}
                    </SheetDescription>
                </SheetHeader>

                <NavBarWidget />

                <NavbarLinks />

                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    );
};

export default MobileDraweMenu;