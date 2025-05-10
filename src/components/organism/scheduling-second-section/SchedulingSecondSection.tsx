import { SelectCustom } from "@/components/atoms"
import { timeList } from "@/utils/constants"

const SchedulingSecondSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-3 w-full">

            <p className="text-xl font-semibold">Scheduling</p>

            <SelectCustom
                selectList={timeList}
            />

            <SelectCustom
                selectList={timeList}
            />

        </div>
    )
}

export default SchedulingSecondSection