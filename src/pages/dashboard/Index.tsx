import { BusinessOverview, LinearHorizontalChartSalesOverview } from "@/components/organism"
const Dashboard = () => {
    return (
        <div className="bg-gray-50">
            <BusinessOverview />
            <LinearHorizontalChartSalesOverview />
        </div>
    )
}

export default Dashboard