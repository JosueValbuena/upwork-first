import { CardRiskAssessments } from "@/components/molecules"

const RiskAssessments = () => {
    return (
        <div className=" bg-white p-5 grow-1 w-full">
            <p className="text-lg font-semibold">Risk Assessments</p>
            <div className="flex flex-row justify-between gap-6 flex-wrap mt-3">
                <CardRiskAssessments />
                <CardRiskAssessments />
                <CardRiskAssessments />
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