import { FilterOptionsOne, PickupCalendar } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Separator } from "@/components/ui/separator";

const tableHeader: string[] = [
    'Date/Time of Change',
    'SKU',
    'Title',
    'ASIN',
    'Marketplace',
    'Old price',
    'New price',
    'Change Reason/Trigger',
    'Seller Account',
    'User/Process'
];

interface MockDataItem {
    id: string,
    date_time_of_change: string,
    sku: string,
    title: string,
    asin: string,
    marketplace: string,
    old_price: string,
    new_price: string,
    change_reason_trigger: string,
    seller_account: string,
    user_process: string,
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        date_time_of_change: '-',
        sku: '-',
        title: '-',
        asin: '-',
        marketplace: '-',
        old_price: '-',
        new_price: '-',
        change_reason_trigger: '-',
        seller_account: '-',
        user_process: '-',
    },
    {
        id: '2',
        date_time_of_change: '-',
        sku: '-',
        title: '-',
        asin: '-',
        marketplace: '-',
        old_price: '-',
        new_price: '-',
        change_reason_trigger: '-',
        seller_account: '-',
        user_process: '-',
    },
    {
        id: '3',
        date_time_of_change: '-',
        sku: '-',
        title: '-',
        asin: '-',
        marketplace: '-',
        old_price: '-',
        new_price: '-',
        change_reason_trigger: '-',
        seller_account: '-',
        user_process: '-',
    },
    {
        id: '4',
        date_time_of_change: '-',
        sku: '-',
        title: '-',
        asin: '-',
        marketplace: '-',
        old_price: '-',
        new_price: '-',
        change_reason_trigger: '-',
        seller_account: '-',
        user_process: '-',
    },
    {
        id: '5',
        date_time_of_change: '-',
        sku: '-',
        title: '-',
        asin: '-',
        marketplace: '-',
        old_price: '-',
        new_price: '-',
        change_reason_trigger: '-',
        seller_account: '-',
        user_process: '-',
    },
];

const AnalyticsRepricingHistoryLog = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Repricing History Log:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <PickupCalendar placeHolder={'Start Date'} />

                    <PickupCalendar placeHolder={'End Date'} />
                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    );
};

export default AnalyticsRepricingHistoryLog;