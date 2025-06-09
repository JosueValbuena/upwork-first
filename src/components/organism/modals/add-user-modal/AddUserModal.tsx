import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { FormFieldCheckbox, FormFieldInputText } from "@/components/molecules";

const formSchema = z.object({
    name: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    email: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    role: z.string()
        .min(1, {
            message: "Field is required.",
        })
    /* password: z.string()
        .min(6, {
            message: "Password must be at least 6 characters.",
        }),
    rememberMe: z.boolean() */
    /* .default(false), */
});

interface AddUserModal {
    isOpen: boolean,
    onCloseModal: () => void
}

type Inputs = z.infer<typeof formSchema>;

const AddUserModal = ({ isOpen, onCloseModal }: AddUserModal) => {

    const [error, setError] = useState('');

    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        /* defaultValues: {
            email: "",
            emailNew: '',
            emailNewConfirm: '',
        }, */
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
                        <p className="font-semibold">Add User</p>
                    </DialogTitle>
                    <DialogDescription>

                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>

                                    <FormFieldInputText
                                        id={'name'}
                                        form={form}
                                        placeHolder={'name'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'Name:'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldInputText
                                        id={'email'}
                                        form={form}
                                        placeHolder={'example@example.com'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'Email:'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldInputText
                                        id={'role'}
                                        form={form}
                                        placeHolder={'type role'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'Role:'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldCheckbox
                                        id={'add-user-1'}
                                        form={form}
                                        label={'Can Access/Change Billing Information'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldCheckbox
                                        id={'add-user-2'}
                                        form={form}
                                        label={'Can Change Settings Configuration'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldCheckbox
                                        id={'add-user-3'}
                                        form={form}
                                        label={'Can Access Dashboard/Analytics'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldCheckbox
                                        id={'add-user-4'}
                                        form={form}
                                        label={'Can Add/Delete Non Admin Users'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <FormFieldCheckbox
                                        id={'add-user-5'}
                                        form={form}
                                        label={'Can Change Min/Max/Cost/Strategies'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    {error && (
                                        <p className='text-red-500 text-sm font-semibold text-center'>
                                            {error}
                                        </p>
                                    )}

                                    <div className="flex justify-end items-center gap-3 mt-3">
                                        <Button
                                            className='my-3 px-8 rounded-md bg-primary-dark text-md font-bold cursor-pointer'
                                            type="submit"
                                        >
                                            Invite
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddUserModal