const ChartsLinearHeader = () => {
    return (
        <div className="flex items-center">
            <p className="font-semibold text-[16px]">Sales Performance</p>

            <div className="flex items-center ml-5">
                <div className="bg-violet-50 p-2 flex items-center ml-3">
                    <div className="rounded-full bg-blue-500 w-2.5 h-2.5"></div>
                    <p className="text-xs pl-2">Total sales</p>
                </div>

                <div className="bg-violet-50 p-2 flex items-center ml-3">
                    <div className="rounded-full bg-green-300 w-2.5 h-2.5"></div>
                    <p className="text-xs pl-2">Profits</p>
                </div>

                <div className="bg-violet-50 p-2 flex items-center ml-3">
                    <div className="rounded-full bg-red-600 w-2.5 h-2.5"></div>
                    <p className="text-xs pl-2">Units Sold</p>
                </div>
            </div>


        </div>
    )
}

export default ChartsLinearHeader