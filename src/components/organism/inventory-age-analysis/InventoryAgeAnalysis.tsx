import { useState } from "react"
import ChartsBar from "../chartsBar/ChartsBar"
import ChartsPie from "../chartsPie/ChartsPie";
/* import ChartsPieTwo from "../charts-pie-2/ChartsPieTwo"; */

const InventoryAgeAnalysis = () => {

    const [activeChart, setActiveChart] = useState('bar');

    const onClickChangeChart = (chartType: string): void => {
        setActiveChart(chartType)
    };

    return (
        <div className="bg-background-secondary-customized p-5 w-full grow-1">
            <div className="flex flex-row items-center justify-between">
                <p className="font-semibold text-lg">Inventory Age Analysis</p>
                <div className="bg-primary-light flex items-center rounded-xl">
                    <div
                        /* bg-purple-500 text-white py-3 px-5 rounded-xl */
                        className={`cursor-pointer ${activeChart === 'bar' ? 'bg-purple-500 text-white py-3 px-5 rounded-xl' : 'p-2'}`}
                        onClick={() => onClickChangeChart('bar')}
                    >
                        <p
                            className="text-xs"
                        >
                            Bar chart
                        </p>
                    </div>

                    <div
                        className={`cursor-pointer ${activeChart === 'pie' ? "bg-purple-500 text-white py-3 px-5 rounded-xl" : "p-2"}`}
                        onClick={() => onClickChangeChart('pie')}
                    >
                        <p
                            className="text-xs"
                        >
                            Pie chart
                        </p>
                    </div>
                </div>
            </div>
            {activeChart === 'bar' && (
                <ChartsBar />
            )}

            {activeChart === 'pie' && (
                <div className="flex items-center justify-center h-full">
                    <>
                        <ChartsPie />
                        {/* <ChartsPieTwo /> */}
                    </>
                </div>
            )}
        </div>
    )
}

export default InventoryAgeAnalysis