import { CardRiskAssessments } from "@/components/molecules"
import { riskdData } from "@/utils/constants"

const RiskAssessments = () => {
    return (
        <div className=" bg-white p-5 grow-1 w-full">
            <p className="text-lg font-semibold">Risk Assessments</p>
            <div className="flex flex-row justify-between gap-5 flex-wrap mt-3">
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