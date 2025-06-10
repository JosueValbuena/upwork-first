import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import TableCustomTwo from "../table-custom-two/TableCustomTwo"
import { ChangePlanModal, UpdatePaymentMethodModal } from "../modals";
import { useState } from "react";

const SuscriptionsSettings = () => {

    const [isOpenModalChangePlan, setIsOpenModalChangePlan] = useState(false);
    const [isOpenModalUpdatePaymentMethod, setIsOpenModalUpdatePaymentMethod] = useState(false);

    const onOpenModalChangePlan = () => {
        setIsOpenModalChangePlan(true);
    };

    const onCloseModalChangePlan = () => {
        setIsOpenModalChangePlan(false);
    };

    const onOpenModalUpdatePaymentMethod = () => {
        setIsOpenModalUpdatePaymentMethod(true);
    };

    const onCloseModalUpdatePaymentMethod = () => {
        setIsOpenModalUpdatePaymentMethod(false);
    };

    const tableHeadTitles = [
        'Date',
        'Plan',
        'Amount',
        'Status',
        'Download invoice'
    ];

    const tableContent = [
        {
            date: 'Jun 15, 2025',
            plan: 'Invoice #1009',
            amount: '$49.00',
            status: 'Paid',
            download_invoince: <Button className="bg-primary-dark rounded-2xl font-bold">Download</Button>
        },
        {
            date: 'May 15, 2025',
            plan: 'Invoice #1008',
            amount: '$49.00',
            status: 'Paid',
            download_invoince: <Button className="bg-primary-dark rounded-2xl font-bold">Download</Button>
        },
        {
            date: 'Apr 15, 2025',
            plan: 'Invoice #1007',
            amount: '$49.00',
            status: 'Paid',
            download_invoince: <Button className="bg-primary-dark rounded-2xl font-bold">Download</Button>
        },
        {
            date: 'Mar 15, 2025',
            plan: 'Invoice #1006',
            amount: '$49.00',
            status: 'Paid',
            download_invoince: <Button className="bg-primary-dark rounded-2xl font-bold">Download</Button>
        }
    ];

    return (
        <>
            <ChangePlanModal isOpen={isOpenModalChangePlan} onCloseModal={onCloseModalChangePlan} />
            <UpdatePaymentMethodModal isOpen={isOpenModalUpdatePaymentMethod} onCloseModal={onCloseModalUpdatePaymentMethod} />

            <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 md:px-10'>
                <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">

                    <h2 className="font-bold text-lg">Billing</h2>

                    <div className="flex">
                        <div>
                            <p className="text-sm">Plan</p>
                            <p className="font-semibold text-sm">Profesional</p>
                        </div>

                        <Button
                            className="bg-primary-dark ml-23 font-bold"
                            onClick={onOpenModalChangePlan}
                        >
                            Change Plan
                        </Button>

                        <Button className="bg-primary-dark ml-7 font-bold">Cancel Subscription</Button>
                    </div>

                    <Separator />

                    <div className="flex">
                        <div>
                            <p className="text-sm">Next Renewal Date</p>
                            <p className="font-semibold text-sm">May-15-2025</p>
                        </div>
                    </div>

                    <Separator />

                    <div className="flex">
                        <div>
                            <p className="text-sm">Payment Method</p>
                            <p className="font-semibold text-sm">Visa ending in 234</p>
                        </div>

                        <Button
                            className="bg-primary-dark ml-10 font-bold"
                            onClick={onOpenModalUpdatePaymentMethod}
                        >
                            Update
                        </Button>
                    </div>

                    <h2 className="font-bold text-lg">Billing History</h2>

                    <TableCustomTwo tableHeadTitles={tableHeadTitles} tableContent={tableContent} />

                </div>
            </div>
        </>
    )
}

export default SuscriptionsSettings