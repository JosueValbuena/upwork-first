import { CardBusinessOverview } from "@/components/molecules"
import { metrics } from "@/utils/constants"

const BusinessOverview = () => {
    return (
        <div className="flex gap-y-1 gap-x-1 my-3 flex-wrap justify-center max-w-[1300px] mx-auto">
            {metrics.map(metric => (
                <CardBusinessOverview 
                key={metric.label}
                data={metric}
                />
            ))}
        </div>
    )
}

export default BusinessOverview