import { SelectCustom } from "@/components/atoms"
import { CheckBoxLabel, SwitchLabel, TooltipCustom } from "@/components/molecules"

const defaultValues = [
    {
        value: 'default',
        label: 'Default'
    },
];

const timerSelect = {
    hours: Array.from({ length: 12 }, (_, i) => {
        const value = (i + 1).toString().padStart(2, '0');
        return { value, label: value };
    }),
    minutes: Array.from({ length: 60 }, (_, i) => {
        const value = i.toString().padStart(2, '0');
        return { value, label: value };
    }),
    period: [
        { value: 'AM', label: 'AM' },
        { value: 'PM', label: 'PM' },
    ],
};

const NotificationSettings = () => {
    return (
        <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 md:px-10'>
            <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">
                <h2 className="font-bold text-lg">Notification</h2>

                <div className="md:flex md:gap-33">
                    <div>
                        <div className="w-[13.5rem]">
                            <SwitchLabel id={'receive-notifications'} label={'Receive Notifications'} switchFirst={true} />
                        </div>
                        <p>Turn this on to start getting notifications.</p>
                    </div>

                    <div className="mt-3 md:m-0 md:flex md:items-center md:gap-3">
                        <p>Time of Day To Send Notifications</p>

                        <div className="flex items-center">
                            <SelectCustom selectList={timerSelect.hours} customStyle={'w-[5rem] bg-white'} />
                            <p>:</p>
                            <SelectCustom selectList={timerSelect.minutes} customStyle={'w-[5rem] bg-white'} />
                            <SelectCustom selectList={timerSelect.period} customStyle={'w-[5rem] bg-white'} />
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className="textmd font-semibold">Method of notifications</p>
                    <p>Choose how you’d like to recive alerts.</p>

                    <CheckBoxLabel id={'email'} label={'Email'} customizeStyles={'flex items-center flex-row-reverse justify-end mt-2 gap-3'} />

                    <CheckBoxLabel id={'text-message'} label={'Text Message'} customizeStyles={'flex items-center flex-row-reverse justify-end mt-2 gap-3'} />
                </div>

                <div className="flex items-center mt-3">
                    <div className="md:w-[30rem]">
                        <p className="text-md font-semibold">Which User’s ?</p>
                        <p>Choose which users will be sent Notifications</p>
                    </div>

                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

                <div className="mt-3 md:flex md:items-center">
                    <div className="md:w-[30rem]">
                        <TooltipCustom
                            title={<p>Get notified when a product is missing a Min/Max/Cost Price.</p>}
                            trigger={<SwitchLabel id={'notifications-1'} label={'Active SKU’s Missing a Min/Max/Cost price.'} switchFirst={true} />}
                        />
                    </div>
                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

                <div className="mt-3 md:flex md:items-center">
                    <div className="md:w-[30rem]">
                        <TooltipCustom
                            title={<p>Get notified when a SKU’s Price is less then the Min Price.</p>}
                            trigger={<SwitchLabel id={'notifications-2'} label={"Active SKU's where Price < Min Price."} switchFirst={true} />}
                        />
                    </div>
                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

                <div className="mt-3 md:flex md:items-center">
                    <div className="md:w-[30rem]">
                        <TooltipCustom
                            title={<p>Get notified when a SKU’s Price is less then the Cost Price.</p>}
                            trigger={<SwitchLabel id={'notifications-3'} label={"Active SKU's where Price < Cost Price."} switchFirst={true} />}
                        />
                    </div>
                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

                <div className="mt-3 md:flex md:items-center">
                    <div className="md:w-[30rem]">
                        <TooltipCustom
                            title={<p>Get notified when a Active SKU with an age at least 30 Days has had no sales in the past 30 Days.</p>}
                            trigger={<SwitchLabel id={'notifications-4'} label={"Active SKU's where No Sales for 30 Days."} switchFirst={true} />}
                        />
                    </div>
                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

                <div className="mt-3 md:flex md:items-center">
                    <div className="md:w-[30rem]">
                        <TooltipCustom
                            title={<p>Get notified when a Active SKU’s Competitors Price is below my Min Price.</p>}
                            trigger={<SwitchLabel id={'notifications-5'} label={"Active SKU's where Competition <  Min Price."} switchFirst={true} />}
                        />
                    </div>
                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

                <div className="mt-3 md:flex md:items-center">
                    <div className="md:w-[30rem]">
                        <TooltipCustom
                            title={<p>Get notified when a product is missing a strategy.</p>}
                            trigger={<SwitchLabel id={'notifications-6'} label={"Active SKU's Without an Assigned Strategy."} switchFirst={true} />}
                        />
                    </div>
                    <SelectCustom selectList={defaultValues} customStyle={'w-[12rem] bg-white'} />
                </div>

            </div>
        </div>
    )
}

export default NotificationSettings