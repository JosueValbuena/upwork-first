import { SelectCustom } from "@/components/atoms";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface ChangePlanModal {
    isOpen: boolean,
    onCloseModal: () => void
}

const ChangePlanModal = ({ isOpen, onCloseModal }: ChangePlanModal) => {

    const optionValue = [
        {
            label: 'Free Trial',
            value: 'Free Trail'
        },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onCloseModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <p className="font-semibold">Change Plan</p>
                    </DialogTitle>
                    <DialogDescription>

                        <p className="text-foreground mt-5">Plan</p>
                        <SelectCustom
                            selectList={optionValue}
                            customStyle="bg-white w-full mt-3"
                        />

                        <div className="flex justify-end mt-5">
                            <Button
                                className="mr-5 font-semibold cursor-pointer text-foreground"
                                variant='ghost'
                                onClick={onCloseModal}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="px-10 rounded-2xl font-semibold bg-primary-dark cursor-pointer"
                            >
                                Save
                            </Button>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ChangePlanModal