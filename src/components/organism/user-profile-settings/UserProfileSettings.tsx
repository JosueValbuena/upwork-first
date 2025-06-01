import { SelectLabel } from "@/components/molecules"
import { Button } from "@/components/ui/button"

const UserProfileSettings = () => {
    return (
        <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6'>
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
                    <p className="font-bold text-xl">My Email:</p> <p className="font-bold text-xl">example@example.com</p>
                    <Button className=" bg-primary-dark cursor-pointer md:ml-7">Update Email</Button>
                </div>

                <div className="flex flex-col gap-5 items-center md:flex-row">
                    <p className="font-bold text-xl">Set Phone #:</p> <p className="font-bold text-xl">(777) 123-4567</p>
                    <Button className=" bg-primary-dark cursor-pointer md:ml-24">Update Phone</Button>
                </div>

                <div className="flex flex-col gap-5 items-center md:flex-row">
                    <p className="font-bold text-xl">Password</p>
                    <Button className=" bg-primary-dark cursor-pointer md:ml-71">Change Password</Button>
                </div>

            </div>
        </div>
    )
}

export default UserProfileSettings