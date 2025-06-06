import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { FormFieldInputPassword } from "@/components/molecules";
import { useState } from "react";

const formSchema = z.object({
    /* password: z.string()
        .min(6, {
            message: "Password must be at least 6 characters.",
        }),
        */
});


interface ChangePasswordModal {
    isOpen: boolean,
    onCloseModal: () => void
}

type Inputs = z.infer<typeof formSchema>;

const ChangePasswordModal = ({ isOpen, onCloseModal }: ChangePasswordModal) => {

    const [error, setError] = useState('');

    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            passwordCurrent: "",
            emailNew: '',
            emailNewConfirm: '',
        },
    });

    const onClose = () => {
        form.reset();
        onCloseModal();
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

        setError('some error')
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <p className="font-semibold">Change Password</p>
                    </DialogTitle>
                    <DialogDescription>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>

                                    <FormFieldInputPassword
                                        id={'passwordCurrent'}
                                        form={form}
                                        placeHolder={'Enter Current Password'}
                                        customizedInput={'bg-white py-7 mt-5 rounded-md'}
                                        label={'Enter Current Password'}
                                        customizedLabel={'text-foreground mt-5'}
                                    />

                                    <FormFieldInputPassword
                                        id={'passwordNew'}
                                        form={form}
                                        placeHolder={'New Password'}
                                        customizedInput={'bg-white py-7 mt-5 rounded-md'}
                                        label={'New Password'}
                                        customizedLabel={'text-foreground mt-5'}
                                    />

                                    <FormFieldInputPassword
                                        id={'password-confirm'}
                                        form={form}
                                        placeHolder={'Re-type New Password'}
                                        customizedInput={'bg-white py-7 mt-5 rounded-md'}
                                        label={'Re-type New Password'}
                                        customizedLabel={'text-foreground mt-5'}
                                    />

                                    {error && (
                                        <p className='text-red-500 text-sm font-semibold text-center'>
                                            {error}
                                        </p>
                                    )}

                                    <div className="flex justify-end items-center gap-3">
                                        <Button
                                            variant={'ghost'}
                                            className='text-foreground cursor-pointer'
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            className='my-3 px-8 rounded-md bg-primary-dark text-md font-bold cursor-pointer'
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ChangePasswordModal;