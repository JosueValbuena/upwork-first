import { AnalyticsContainer } from "@/components/organism";

const Analytics = () => {
    return (
        <div className="max-w-[1366px] w-full mx-auto">
            <div className="flex flex-col pt-3 mx-10 mb-3">
                <h1 className='text-2xl font-semibold'>
                    Reports
                </h1>
                <p>Choose the report you would like to view.</p>

                <AnalyticsContainer />
            </div>
        </div>
    )
};

export default Analytics;