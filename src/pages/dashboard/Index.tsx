import {
    BusinessOverview,
    InventoryAgeAnalysis,
    InventoryAllocation,
    InventoryByBrand,
    LinearHorizontalChartSalesOverview,
    RiskAssessments,
    SmartRepricerActivityLog
} from "@/components/organism";

const Dashboard = () => {
    return (
        <div className="bg-gray-50">
            <BusinessOverview />
            <LinearHorizontalChartSalesOverview />
            <div
                className="flex justify-between flex-wrap max-w-[1366px] mx-auto gap-3 xl:flex-nowrap"
            >
                <InventoryAgeAnalysis />
                <RiskAssessments />
            </div>
            <div
                className="flex justify-between flex-wrap max-w-[1366px] mx-auto gap-3 xl:flex-nowrap mt-3"
            >
                <InventoryAllocation />
                <SmartRepricerActivityLog />
            </div>
            <InventoryByBrand />
        </div>
    )
}

export default Dashboard