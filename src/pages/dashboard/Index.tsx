import { BusinessOverview, InventoryAgeAnalysis, LinearHorizontalChartSalesOverview, RiskAssessments } from "@/components/organism"
const Dashboard = () => {
    return (
        <div className="bg-gray-50">
            <BusinessOverview />
            <LinearHorizontalChartSalesOverview />
            <div className="flex justify-between flex-wrap max-w-[1280px] mx-auto gap-3 xl:flex-nowrap">
                <InventoryAgeAnalysis />
                <RiskAssessments />
            </div>
        </div>
    )
}

export default Dashboard