import { useAppSelector } from "@/store/hooks";
import ChartsLinearHeader from "../charts-linear-header/ChartsLinearHeader";
import ChartsLinear from "../chartsLinear/ChartsLinear";

export const LinearHorizontalChartSalesOverview = () => {
    const { value: isSortMode } = useAppSelector(state => state.sortMode);
    return (
        <div className={`bg-background-secondary-customized 
        p-2 max-w-[1366px] mx-auto my-3
        ${isSortMode ? 'cursor-grab' : ''}
        `}>
            <ChartsLinearHeader />
            <ChartsLinear /* chartData={data} */ />
        </div>
    );
};

export default LinearHorizontalChartSalesOverview;