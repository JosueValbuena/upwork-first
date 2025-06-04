import { SelectLabel } from "@/components/molecules"
import { Button } from "@/components/ui/button"

const UserProfileSettings = () => {
    return (
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
                    <p className="font-semibold text-md">My Email:</p> <p className="font-semibold text-md">example@example.com</p>
                    <Button className=" bg-primary-dark cursor-pointer md:ml-15">Update Email</Button>
                </div>

                <div className="flex flex-col gap-5 items-center md:flex-row">
                    <p className="font-semibold text-md">Set Phone #:</p> <p className="font-semibold text-md">(777) 123-4567</p>
                    <Button className=" bg-primary-dark cursor-pointer md:ml-28">Update Phone</Button>
                </div>

                <div className="flex flex-col gap-5 items-center md:flex-row">
                    <p className="font-semibold text-md">Password</p>
                    <Button className=" bg-primary-dark cursor-pointer md:ml-67">Change Password</Button>
                </div>

            </div>
        </div>
    )
}

export default UserProfileSettings