import { CardRiskAssessments } from "@/components/molecules"

const RiskAssessments = () => {
    return (
        <div className=" max-w-[550px] bg-white p-5">
            <p className="text-lg font-semibold">Risk Assessments</p>
            <div className="flex flex-row justify-between gap-4 flex-wrap mt-3">
                <CardRiskAssessments />
                <CardRiskAssessments />
                <CardRiskAssessments />
                <CardRiskAssessments />
                <CardRiskAssessments />
                <CardRiskAssessments />
            </div>
        </div>
    )
}

export default RiskAssessments