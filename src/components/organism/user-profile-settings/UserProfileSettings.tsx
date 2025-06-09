import { SelectLabel } from "@/components/molecules"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { ChangeEmailModal, ChangePasswordModal, UpdatePhoneModal } from "../modals";
import ErrorBoundary from "@/components/utilsComponents/error-boundary/ErrorBoundary";

const UserProfileSettings = () => {

    const [isOpenModalUpdateEmail, setIsOpenModalUpdateEmail] = useState(false);
    const [isOpenModalUpdatePhone, setIsOpenModalUpdatePhone] = useState(false);
    const [isOpenModalUpdatePassword, setIsOpenModalUpdatePassword] = useState(false);

    const onOpenModalUpdateEmail = () => {
        setIsOpenModalUpdateEmail(true);
    };

    const onCloseModalUpdateEmail = () => {
        setIsOpenModalUpdateEmail(false);
    };

    const onOpenModalUpdatePhone = () => {
        setIsOpenModalUpdatePhone(true);
    };

    const onCloseModalUpdatePhone = () => {
        setIsOpenModalUpdatePhone(false);
    };

    const onOpenModalUpdatePassword = () => {
        setIsOpenModalUpdatePassword(true);
    };

    const onCloseModalUpdatePassword = () => {
        setIsOpenModalUpdatePassword(false);
    };

    return (
        <>
            <UpdatePhoneModal isOpen={isOpenModalUpdatePhone} onCloseModal={onCloseModalUpdatePhone} />

            <ErrorBoundary>
                <ChangeEmailModal isOpen={isOpenModalUpdateEmail} onCloseModal={onCloseModalUpdateEmail} />
            </ErrorBoundary>

            <ChangePasswordModal isOpen={isOpenModalUpdatePassword} onCloseModal={onCloseModalUpdatePassword} />

            <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 h-full md:px-10'>
                <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">
                    <div className="flex flex-col gap-5 md:flex-row md:gap-20">
                        <SelectLabel label={'Default Currency'} />
                        <SelectLabel label={'Default Languague'} />
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-20">
                        <SelectLabel label={'Default Timezone'} />
                        <SelectLabel label={'Default Marketplace'} />
                    </div>

                    <div className="flex flex-col gap-5 items-center md:flex-row">
                        <div className="md:w-[23.5rem]">
                            <p className="font-medium text-md">My Email:</p> <p className="font-medium text-md">example@example.com</p>
                        </div>
                        <Button
                            className="bg-primary-dark cursor-pointer w-[10rem]"
                            onClick={onOpenModalUpdateEmail}
                        >
                            Update Email
                        </Button>
                    </div>

                    <div className="flex flex-col gap-5 items-center md:flex-row">
                        <div className="md:w-[23.5rem]">
                            <p className="font-medium text-md">Set Phone #:</p> <p className="font-medium text-md">(777) 123-4567</p>
                        </div>
                        <Button
                            className="bg-primary-dark cursor-pointer w-[10rem]"
                            onClick={onOpenModalUpdatePhone}
                        >
                            Update Phone
                        </Button>
                    </div>

                    <div className="flex flex-col gap-5 items-center md:flex-row">
                        <div className="md:w-[23.5rem]">
                            <p className="font-medium text-md">Password</p>
                        </div>
                        <Button
                            className="bg-primary-dark cursor-pointer w-[10rem]"
                            onClick={onOpenModalUpdatePassword}
                        >
                            Change Password
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserProfileSettings