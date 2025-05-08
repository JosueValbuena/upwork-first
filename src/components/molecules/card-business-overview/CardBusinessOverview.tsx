import { IconArrowDownBlack, IconInfopOutlinedPurple } from "@/utils/icons"

const CardBusinessOverview = () => {
    return (
        <div className="bg-violet-50 flex justify-between px-3 py-4 rounded-xl w-[100%] max-w-[245px]">
            <div className="flex">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">I</div>
                <div className="ml-3">
                    <div className="flex items-center">
                        <p className="text-xl font-semibold">500</p>
                        <div className="flex items-center ml-2 p-0 bg-white h-3 rounded-xs">
                            <div className="bg-purple-600 h-3 flex items-center rounded-xs px-1">
                                <p className="text-[7px] text-white">ROI</p>
                            </div>
                            <div className="px-1">
                                <p className="text-[7px]">Profit</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-xs font-medium">Example text card</p>
                        <IconInfopOutlinedPurple className="ml-1" />
                    </div>
                </div>
            </div>

            <div className="flex">
                <p className="text-xs font-semibold">30 days</p>
                <IconArrowDownBlack />
            </div>
        </div>
    )
}

export default CardBusinessOverview