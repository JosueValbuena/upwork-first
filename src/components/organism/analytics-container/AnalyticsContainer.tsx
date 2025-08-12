import { AnalyticsOptionCard } from "@/components/molecules"
import { analyticsItem } from "@/utils/constants";

const AnalyticsContainer = () => {
    return (
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {analyticsItem.map(item => (
                <AnalyticsOptionCard key={item.title} data={item} />
            ))}
        </div>
    );
};

export default AnalyticsContainer;