import { SelectLabel, SwitchLabel } from "@/components/molecules"

const GlobalSettings = () => {
    return (
        <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 md:px-10'>
            <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">
                <h2 className="font-bold text-xl">Global Settings</h2>

                <div className="w-[10rem]">
                    <SwitchLabel id={'Global Pause'} label={'Global Pause'} customizedLabel={false} switchFirst={true} />
                </div>

                <SelectLabel label={'Global Pause'} />
            </div>
        </div>
    )
}

export default GlobalSettings