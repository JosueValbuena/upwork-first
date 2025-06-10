import { Button } from "@/components/ui/button"
import TableCustomTwo from "../table-custom-two/TableCustomTwo"
import { IconCanadaFlag, IconEyeContainedPuprle, IconGermanyFlag, IconPlusOutlinedWhite, IconUKFlag, IconUSAFlag } from "@/utils/icons";
import { SelectMarketplaceModal } from "../modals";
import { useState } from "react";

const ActiveMarketplacesSection = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const tableHeadTitles = [
        'Active Marketplaces',
        'Seller ID',
        'Status'
    ];

    const tableData = [
        {
            active_marketplaces: <div className="flex gap-3"><IconUSAFlag />  <p className="text-xs">Amazon US</p></div>,
            seller_ID: <p className="text-xs">A3Nkai85G30</p>,
            status: <div className="flex gap-2"><p className="text-xs">Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-fit py-1 px-5 rounded-xl cursor-pointer font-semibold text-xs"
            >
                Remove
            </div>
        },
        {
            active_marketplaces: <div className="flex gap-3"><IconUKFlag />  <p className="text-xs">Amazon UK</p></div>,
            seller_ID: <p className="text-xs">A3Nkai85G31</p>,
            status: <div className="flex gap-2"><p className="text-xs">Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-fit py-1 px-5 rounded-xl cursor-pointer font-semibold text-xs"
            >
                Remove
            </div>
        },
        {
            active_marketplaces: <div className="flex gap-3"><IconCanadaFlag />  <p>Amazon CA</p></div>,
            seller_ID: <p className="text-xs">A3Nkai85G32</p>,
            status: <div className="flex gap-2"><p className="text-xs">Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-fit py-1 px-5 rounded-xl cursor-pointer font-semibold text-xs"
            >
                Remove
            </div>
        },
        {
            active_marketplaces: <div className="flex gap-3"><IconGermanyFlag />  <p>Amazon DE</p></div>,
            seller_ID: <p className="text-xs">A3Nkai85G33</p>,
            status: <div className="flex gap-2"><p className="text-xs">Connected</p> <IconEyeContainedPuprle /></div>,
            action: <div
                className="bg-primary-dark text-center text-white w-fit py-1 px-5 rounded-xl cursor-pointer font-semibold text-xs"
            >
                Remove
            </div>
        },

    ];

    const onOpenModal = () => {
        setIsOpenModal(true);
    };

    const onCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <>

            <SelectMarketplaceModal isOpen={isOpenModal} onCloseModal={onCloseModal} />

            <div className="p-3 flex flex-col gap-3 bg-primary-light mt-6 h-full md:px-5">
                <div className="w-full max-w-[1366px] mx-auto flex flex-col-reverse md:p-5 lg:flex-row">

                    <div className="grow-1 pt-5">
                        <TableCustomTwo tableHeadTitles={tableHeadTitles} tableContent={tableData} />
                    </div>

                    <div className="lg:ml-10">
                        <Button
                            className="bg-primary-dark text-sm font-semibold"
                            onClick={onOpenModal}
                        >
                            <IconPlusOutlinedWhite />
                            Add marketplace
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ActiveMarketplacesSection