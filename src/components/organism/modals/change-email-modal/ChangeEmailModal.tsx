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
import { FormFieldInputText } from "@/components/molecules";
import { useState } from "react";

const formSchema = z.object({
    email: z.string()
        .min(1, {
            message: "Email is required.",
        })
        .email({
            message: "Invalid email address.",
        }),
    emailNew: z.string()
        .min(1, {
            message: "Email is required.",
        })
        .email({
            message: "Invalid email address.",
        }),
    emailNewConfirm: z.string()
        .min(1, {
            message: "Email is required.",
        })
        .email({
            message: "Invalid email address.",
        }),
    /* password: z.string()
        .min(6, {
            message: "Password must be at least 6 characters.",
        }),
    rememberMe: z.boolean() */
    /* .default(false), */
});


interface ChangeEmailModal {
    isOpen: boolean,
    onCloseModal: () => void
}

type Inputs = z.infer<typeof formSchema>;

const ChangeEmailModal = ({ isOpen, onCloseModal }: ChangeEmailModal) => {

    const [error, setError] = useState('');

    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
                        <p className="font-semibold">Change Email</p>
                    </DialogTitle>
                    <DialogDescription>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>

                                    <FormFieldInputText
                                        id={'email'}
                                        form={form}
                                        placeHolder={'example@example.com'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'Current Email:'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldInputText
                                        id={'emailNew'}
                                        form={form}
                                        placeHolder={'example@example.com'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'New Email:'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldInputText
                                        id={'emailNewConfirm'}
                                        form={form}
                                        placeHolder={'example@example.com'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'Re-type New Email:'}
                                        labelCustomized={'text-foreground mt-5'}
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

export default ChangeEmailModal;