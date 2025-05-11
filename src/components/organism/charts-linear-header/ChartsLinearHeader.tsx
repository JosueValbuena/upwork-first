import { ChecbokCustom } from "@/components/atoms"
import { Button } from "@/components/ui/button"

const ChartsLinearHeader = () => {

    const onChecked: (event:boolean) => void = (event:boolean) => {
        console.log(event)
    }

    return (
        <div className="flex items-center px-13 flex-wrap gap-3">
            <p className="center font-semibold text-[16px]">Sales Performance</p>

            <div className="flex items-center lg:ml-5">
                
                <div className="bg-violet-50 p-2 flex items-center ml-3">
                    <div className="rounded-full bg-blue-500 w-2.5 h-2.5"></div>
                    <p className="text-xs pl-2 mr-2">Total sales</p>

                    <ChecbokCustom onChecked={onChecked} />
                </div>

                <div className="bg-violet-50 p-2 flex items-center ml-3">
                    <div className="rounded-full bg-green-300 w-2.5 h-2.5"></div>
                    <p className="text-xs pl-2 mr-2">Profits</p>

                    <ChecbokCustom onChecked={onChecked} />
                </div>

                <div className="bg-violet-50 p-2 flex items-center ml-3">
                    <div className="rounded-full bg-red-600 w-2.5 h-2.5"></div>
                    <p className="text-xs pl-2 mr-2">Units Sold</p>

                    <ChecbokCustom onChecked={onChecked} />
                </div>
            </div>

            <div className="flex flex-wrap gap-3 xl:ml-[auto]">
                <div className="flex items-center">
                    <p className="text-xs font-bold mr-1.5">Views:</p>
                    <div className="bg-primary-light p-2 rounded-md">
                        <Button className="text-xs px-2 h-6 mx-2 bg-purple-500 ">By Day</Button>
                        <Button className="text-xs px-2 mx-2 h-6 text-black bg-purple-200  hover:text-white">By Month</Button>
                        <Button className="text-xs px-2 mx-2 h-6 text-black bg-purple-200  hover:text-white">By Year</Button>
                    </div>
                </div>

                <div className="flex ml-3 items-center">
                    <Button className="text-xs text-black font-bold bg-primary-light w-30 py-5 mx-2 hover:text-white">By Brand</Button>
                    <Button className="text-xs text-black font-bold bg-primary-light w-30 py-5 mx-2 hover:text-white">Past 30 Days</Button>
                </div>
            </div>


        </div>
    )
}

export default ChartsLinearHeader