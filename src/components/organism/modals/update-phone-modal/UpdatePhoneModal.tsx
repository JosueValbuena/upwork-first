import { InputCustom } from "@/components/atoms"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    /* DialogTrigger, */
} from "@/components/ui/dialog";

interface UpdatePhoneModal {
    isOpen: boolean,
    onCloseModal: () => void
}

const UpdatePhoneModal = ({ isOpen, onCloseModal }: UpdatePhoneModal) => {
    return (
        <Dialog open={isOpen} onOpenChange={onCloseModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <p className="font-semibold">Update Phone Number</p>
                    </DialogTitle>
                    <DialogDescription>

                        <p className="text-black mt-3">New Phone Number (US Only)</p>

                        <InputCustom
                            id={'newPhoneNumber'}
                            name={'newPhoneNumber'}
                            /* value={ } */
                            /* onChange={ } */
                            placeHolder={'(xxx) xxx-xxxx'}
                            type={'text'}
                            customizedInput={'bg-white mt-2'}
                        />

                        <div className="flex justify-end mt-5">
                            <Button 
                            variant={'ghost'} 
                            className="cursor-pointer text-foreground mr-2"
                            onClick={onCloseModal}
                            >Cancel</Button>
                            <Button className="rounded-sm font-semibold bg-primary-dark cursor-pointer">Send OTP Code</Button>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default UpdatePhoneModal;