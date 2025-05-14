import { CardRiskAssessments } from "@/components/molecules"
import { riskdData } from "@/utils/constants"

const RiskAssessments = () => {
    return (
        <div className=" bg-background-secondary-customized px-4 py-3 grow-1 w-full pt-5">
            <p className="text-lg font-semibold">Risk Assessments</p>
            <div className="flex flex-row justify-between gap-y-3 gap-x-0 flex-wrap mt-1">
                {riskdData.map(riskItem => (
                <CardRiskAssessments 
                key={riskItem.label}
                riskData={riskItem}
                />
                ))}
            </div>
        </div>
    )
}

export default RiskAssessments