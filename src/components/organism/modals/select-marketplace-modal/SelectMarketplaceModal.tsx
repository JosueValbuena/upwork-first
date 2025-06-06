import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { IconAmazonNormal, IconEbayNormal, IconWalmartNormal } from "@/utils/icons"

interface SelectMarketplaceModal {
    isOpen: boolean,
    onCloseModal: () => void
}

const SelectMarketplaceModal = ({ isOpen, onCloseModal }: SelectMarketplaceModal) => {
    return (
        <Dialog open={isOpen} onOpenChange={onCloseModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <p className="font-semibold">Select a marketplace</p>
                    </DialogTitle>
                    <DialogDescription>
                        <div className="flex items-center gap-6 h-15 mt-5 cursor-pointer group">
                            <div className="w-[6rem] flex justify-center">
                                <IconAmazonNormal />
                            </div>
                            <p className="group-hover:font-semibold group-hover:text-foreground">Amazon</p>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-6 h-15 cursor-pointer group">
                            <div className="w-[6rem] flex justify-center">
                                <IconEbayNormal />
                            </div>
                            <p className="group-hover:font-semibold group-hover:text-foreground">Ebay</p>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-6 h-15 cursor-pointer group">
                            <div className="w-[6rem] flex justify-center">
                                <IconWalmartNormal />
                            </div>
                            <p className="group-hover:font-semibold group-hover:text-foreground">Walmart</p>
                        </div>
                        <Separator />

                        <div className="flex justify-end mt-5">
                            <Button className="px-10 rounded-2xl font-semibold bg-primary-dark cursor-pointer">Add</Button>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default SelectMarketplaceModal;