import { Button } from "@/components/ui/button"

const ChartsLinearHeader = () => {
    return (
        <div className="flex items-center px-13 flex-wrap">
            <p className="center font-semibold text-[16px]">Sales Performance</p>

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

            <div className="flex ml-[auto] flex-wrap">
                <div className="flex items-center">
                    <p className="text-xs font-bold mr-1.5">Views:</p>
                    <div className="bg-violet-100 p-2 rounded-md">
                        <Button className="text-xs  bg-purple-500 px-3 mx-2">By Day</Button>
                        <Button className="text-xs text-black bg-purple-200 px-3 mx-2 hover:text-white">By Month</Button>
                        <Button className="text-xs text-black bg-purple-200 px-3 mx-2 hover:text-white">By Year</Button>
                    </div>
                </div>

                <div className="flex ml-3 items-center">
                    <Button className="text-xs text-black font-bold bg-violet-100 w-30 py-6 mx-2 hover:text-white">By Brand</Button>
                    <Button className="text-xs text-black font-bold bg-violet-100 w-30 py-6 mx-2 hover:text-white">Past 30 Days</Button>
                </div>
            </div>


        </div>
    )
}

export default ChartsLinearHeader