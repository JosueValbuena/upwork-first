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

import { FormFieldInputText, FormFieldRadioGroup } from "@/components/molecules";
import { IconAmericanExpressNormal, IconMastercardNormal, IconpadlockOutlinedPurple, IconPaypalNormal, IconVisaNormal } from "@/utils/icons";
import FormFieldSelect from "@/components/molecules/form-field-select/FormFieldSelect";

interface UpdatePaymentMethodModal {
    isOpen: boolean,
    onCloseModal: () => void
};

const formSchema = z.object({
    paymentMethod: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    billingName: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    cardNumber: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    cvv: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    streetAddress: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    city: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    state: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    zipCode: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    country: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    mm: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    yy: z.string()
        .min(1, {
            message: "Field is required.",
        }),
    /* password: z.string()
        .min(6, {
            message: "Password must be at least 6 characters.",
        }),
    rememberMe: z.boolean() */
    /* .default(false), */
});

type Inputs = z.infer<typeof formSchema>;

const UpdatePaymentMethodModal = ({ isOpen, onCloseModal }: UpdatePaymentMethodModal) => {

    const [error, setError] = useState('');

    const optionValue = [
        {
            label: 'Default value',
            value: 'Default value'
        },
    ];

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
                        <p className="font-semibold">Update Payment method</p>
                    </DialogTitle>
                    <DialogDescription>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>

                                <div className="max-h-[60dvh] overflow-y-scroll">
                                    <div>

                                        <p className="text-foreground mt-5">Choose a payment method and securely update your information.</p>

                                        <div className="flex items-center gap-3 mt-3">
                                            <IconMastercardNormal />
                                            <IconPaypalNormal />
                                            <IconVisaNormal />
                                            <IconAmericanExpressNormal />
                                        </div>

                                        <FormFieldRadioGroup
                                            id="paymentMethod"
                                            form={form}
                                            label="Method of payment"
                                            labelCustomized={'font-semibold text-foreground mt-3'}
                                            options={
                                                [
                                                    {
                                                        label: 'Credit Card',
                                                        value: 'credit-card'
                                                    },
                                                    {
                                                        label: 'Paypal',
                                                        value: 'paypal'
                                                    },
                                                ]
                                            }
                                        />

                                        <div className="flex gap-3">

                                            <FormFieldInputText
                                                id={'billingName'}
                                                form={form}
                                                placeHolder={'Billing Name'}
                                                customizedInput={'bg-white mt-1 rounded-md'}
                                                label={'Billing Name:'}
                                                labelCustomized={'text-foreground mt-5'}
                                            />

                                            <FormFieldInputText
                                                id={'cardNumber'}
                                                form={form}
                                                placeHolder={'0000 0000 0000 000'}
                                                customizedInput={'bg-white mt-1 rounded-md'}
                                                label={'Card Number:'}
                                                labelCustomized={'text-foreground mt-5'}
                                            />
                                        </div>

                                        <div className="flex gap-3">

                                            <div>
                                                <p className="text-foreground mt-5">Expiration Date</p>
                                                <div className="flex gap-3">
                                                    <FormFieldInputText
                                                        id={'mm'}
                                                        form={form}
                                                        placeHolder={'MM'}
                                                        customizedInput={'bg-white mt-1 rounded-md w-[6.5rem]'}
                                                    />

                                                    <FormFieldInputText
                                                        id={'yy'}
                                                        form={form}
                                                        placeHolder={'YY'}
                                                        customizedInput={'bg-white mt-1 rounded-md w-[6.5rem]'}
                                                    />
                                                </div>
                                            </div>

                                            <FormFieldInputText
                                                id={'cvv'}
                                                form={form}
                                                placeHolder={'xxx'}
                                                customizedInput={'bg-white mt-1 rounded-md'}
                                                label={'CVV:'}
                                                labelCustomized={'text-foreground mt-5'}
                                            />

                                        </div>
                                    </div>

                                    <p className="font-semibold text-foreground mt-6">Billing Address</p>

                                    <FormFieldInputText
                                        id={'streetAddress'}
                                        form={form}
                                        placeHolder={'Street Address'}
                                        customizedInput={'bg-white mt-1 rounded-md'}
                                        label={'Street Address:'}
                                        labelCustomized={'text-foreground mt-5'}
                                    />

                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col gap-3 w-full">
                                            <FormFieldInputText
                                                id={'city'}
                                                form={form}
                                                placeHolder={'City'}
                                                customizedInput={'bg-white mt-1 rounded-md'}
                                                label={'City:'}
                                                labelCustomized={'text-foreground mt-5'}
                                            />

                                            <FormFieldInputText
                                                id={'zipCode'}
                                                form={form}
                                                placeHolder={'Zip Code'}
                                                customizedInput={'bg-white mt-1 rounded-md'}
                                                label={'Zip Code:'}
                                                labelCustomized={'text-foreground mt-5'}
                                            />

                                        </div>

                                        <div className="flex flex-col gap-3 w-full">

                                            <FormFieldSelect
                                                id={'state'}
                                                form={form}
                                                selectList={optionValue}
                                                placeHolder={'Select State'}
                                                customStyle="bg-white w-full mt-1"
                                                labelCustomized={'text-foreground mt-5'}
                                                label={'State'}
                                            />

                                            <FormFieldSelect
                                                id={'country'}
                                                form={form}
                                                selectList={optionValue}
                                                placeHolder={'Select Country'}
                                                customStyle="bg-white w-full mt-2"
                                                labelCustomized={'text-foreground mt-5'}
                                                label={'Country'}
                                            />

                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 my-3">
                                        <p className="mt-1 text-[.75rem]">
                                            Your information is encrypted and secure
                                        </p>
                                        <IconpadlockOutlinedPurple />
                                    </div>


                                    {error && (
                                        <p className='text-red-500 text-sm font-semibold text-center'>
                                            {error}
                                        </p>
                                    )}

                                </div>

                                <div className="flex justify-end mt-5">
                                    <Button
                                        className="mr-5 font-semibold cursor-pointer text-foreground"
                                        variant='ghost'
                                        onClick={onCloseModal}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="px-10 rounded-md font-semibold bg-primary-dark cursor-pointer"
                                    >
                                        Update
                                    </Button>
                                </div>

                            </form>
                        </Form>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default UpdatePaymentMethodModal;