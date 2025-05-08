import ChartsBar from "../chartsBar/ChartsBar"

const InventoryAgeAnalysis = () => {
    return (
        <div className="bg-white p-5 w-full grow-1">
            <div className="flex flex-row items-center justify-between">
                <p className="font-semibold text-lg">Inventory Age Analysis</p>
                <div className="bg-violet-100 flex items-center rounded-xl">
                    <div className="bg-purple-500 text-white py-3 px-5 rounded-xl">
                        <p className="text-xs">Bar chart</p>
                    </div>
                    <div className="p-2">
                        <p className="text-xs">Pie chart</p>
                    </div>
                </div>
            </div>
            <ChartsBar />
        </div>
    )
}

export default InventoryAgeAnalysis