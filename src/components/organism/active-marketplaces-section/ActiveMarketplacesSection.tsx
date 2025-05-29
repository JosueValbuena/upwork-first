import { Button } from "@/components/ui/button"
import TableCustomTwo from "../table-custom-two/TableCustomTwo"

const ActiveMarketplacesSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light mt-6">
            <div className="w-full mx-auto flex">

                <div className="grow-1">
                    <TableCustomTwo />
                </div>

                <div className="ml-10">
                    <Button className="bg-primary-dark text-md font-bold">Add marketplace</Button>
                </div>

            </div>
        </div>
    )
}

export default ActiveMarketplacesSection