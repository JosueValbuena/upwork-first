/* import ChartsBarSecond from "../charts-bar-second/ChartsBarSecond" */
import ChartsPie from "../chartsPie/ChartsPie";
/* import ChartsPie from "../chartsPie/ChartsPie" */

const InventoryAllocation = () => {
    return (
        <div className="bg-white grow-1 p-5 w-full">
            <div className="flex flex-col justify-center items-center mx-auto md:flex-row md:justify-start md:items-center">
                <p className="font-semibold text-md text-center">Inventory Allocation</p>

                <div className="mt-1 flex items-center gap-3 md:ml-2">
                    <div className="bg-primary-light py-2 flex items-center justify-center rounded-md">
                        <p className="text-xs w-14 text-center">Units</p>
                    </div>
                    <div className="bg-primary-light py-2 flex items-center justify-center rounded-md">
                        <p className="text-xs w-18 text-center">By category</p>
                    </div>
                </div>

                <div className="mt-3 flex items-center md:ml-2">
                    <p className="text-xs font-bold mr-1">View:</p>
                    <div className="bg-gray-100 p-2 flex rounded-md items-center">
                        <div className="bg-purple-500 p-1 mx-1 text-xs cursor-pointer text-white rounded-md hover:bg-black hover:text-white">
                            <p>Units</p>
                        </div>
                        <div className="bg-primary-light p-1 mx-1 text-xs cursor-pointer rounded-md hover:bg-black hover:text-white">
                            <p>Cost price</p>
                        </div>
                        <div className="bg-primary-light p-1 mx-1 text-xs cursor-pointer rounded-md hover:bg-black hover:text-white">
                            <p>Retail price</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col items-center lg:flex-row">

                <div className="flex flex-col gap-6 w-1/2">
                    <div className="flex gap-3">
                        <div className="bg-[#6F4AFF] w-3 p-3"></div>
                        <p>UNITS 65%</p>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-[#75FF00] w-3 p-3"></div>
                        <p>UNITS 27%</p>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-[#FF8A72] w-3 p-3"></div>
                        <p>UNITS 8%</p>
                    </div>
                </div>

                <ChartsPie />
            </div> */}

            {/* <ChartsBarSecond /> */}
            <div className="flex justify-center items-center h-full">
                <ChartsPie />
            </div>
        </div>
    )
}

export default InventoryAllocation