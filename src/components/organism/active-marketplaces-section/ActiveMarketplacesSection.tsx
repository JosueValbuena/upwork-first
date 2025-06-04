import { Button } from "@/components/ui/button"
import TableCustomTwo from "../table-custom-two/TableCustomTwo"
import { IconCanadaFlag, IconEyeContainedPuprle, IconGermanyFlag, IconPlusOutlinedWhite, IconUKFlag, IconUSAFlag } from "@/utils/icons";

const ActiveMarketplacesSection = () => {

    const tableHeadTitles = [
        'Active Marketplaces',
        'Seller ID',
        'Status'
    ];

    const tableData = [
        {
            active_marketplaces: <div className="flex gap-3"><IconUSAFlag />  <p>Amazon US</p></div>,
            seller_ID: 'A3Nkai85G30',
            status: <div className="flex gap-2"><p>Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-20 py-1 rounded-xl cursor-pointer"
            >
                Remove
            </div>
        },
        {
            active_marketplaces: <div className="flex gap-3"><IconUKFlag />  <p>Amazon UK</p></div>,
            seller_ID: 'A3Nkai85G31',
            status: <div className="flex gap-2"><p>Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-20 py-1 rounded-xl cursor-pointer"
            >
                Remove
            </div>
        },
        {
            active_marketplaces: <div className="flex gap-3"><IconCanadaFlag />  <p>Amazon CA</p></div>,
            seller_ID: 'A3Nkai85G32',
            status: <div className="flex gap-2"><p>Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-20 py-1 rounded-xl cursor-pointer"
            >
                Remove
            </div>
        },
        {
            active_marketplaces: <div className="flex gap-3"><IconGermanyFlag />  <p>Amazon DE</p></div>,
            seller_ID: 'A3Nkai85G33',
            status: <div className="flex gap-2"><p>Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-20 py-1 rounded-xl cursor-pointer"
            >
                Remove
            </div>
        },

    ];

    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light mt-6 md:px-10 h-full">
            <div className="w-full max-w-[1366px] mx-auto flex flex-col-reverse md:p-5 lg:flex-row">

                <div className="grow-1 pt-5">
                    <TableCustomTwo tableHeadTitles={tableHeadTitles} tableContent={tableData} />
                </div>

                <div className="lg:ml-10">
                    <Button className="bg-primary-dark text-md font-bold">
                        <IconPlusOutlinedWhite />
                        Add marketplace
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default ActiveMarketplacesSection