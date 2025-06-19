import { ButtonLabel, InputTextLabel } from "@/components/molecules"

const UserManagementSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-1">
            <p className="text-xl font-semibold">User Management</p>

            <InputTextLabel
                id={'user-management-name'}
                label={'Name'}
                placeHolder={'John Doe'}
                type={'text'}
            />

            <InputTextLabel
                id={'user-management-email'}
                label={'E-Mail'}
                placeHolder={'youremail@email.com'}
                type={'email'}
            />

            <ButtonLabel
                buttonText="Invite"
                label="Role"
            />
        </div>
    )
}

export default UserManagementSection