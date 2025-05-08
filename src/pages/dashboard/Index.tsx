import { BusinessOverview, LinearHorizontalChartSalesOverview, RiskAssessments } from "@/components/organism"
const Dashboard = () => {
    return (
        <div className="bg-gray-50">
            <BusinessOverview />
            <LinearHorizontalChartSalesOverview />
            <div className="flex justify-center">
                <RiskAssessments />
            </div>
        </div>
    )
}

export default Dashboard