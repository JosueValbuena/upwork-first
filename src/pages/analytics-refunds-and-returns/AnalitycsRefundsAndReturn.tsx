import { SelectCustom } from "@/components/atoms";
import { FilterOptionsOne } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Separator } from "@/components/ui/separator";
import type { SelectListItem } from "@/types";

const selectListTime: SelectListItem[] = [
    {
        value: '7',
        label: 'Last 7 Days'
    },
    {
        value: '30',
        label: 'Last 30 Days'
    },
    {
        value: '60',
        label: 'Last 60 Days'
    },
    {
        value: '90',
        label: 'Last 90 Days'
    },
    {
        value: '120',
        label: 'Last 120 Days'
    },
    {
        value: '180',
        label: 'Last 180 Days'
    },
];

const tableHeader: string[] = [
    'SKU',
    'ASIN',
    'Title',
    'Image',
    'Units Sold vs Units Returned',
    'Return Rate %',
    'Refund Amount',
    'Return Reasons Breakdown',
    'Net Loss from Returns'
];

interface MockDataItem {
    id: string,
    sku: string,
    asin: string,
    title: string,
    image: string,
    units_sold_vs_returned: string,
    return_rate: string,
    refund_amount: string,
    return_reasons_breakdown: string,
    net_loss_from_returns: string,
}

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_sold_vs_returned: '-',
        return_rate: '-',
        refund_amount: '-',
        return_reasons_breakdown: '-',
        net_loss_from_returns: '-',
    },
    {
        id: '2',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_sold_vs_returned: '-',
        return_rate: '-',
        refund_amount: '-',
        return_reasons_breakdown: '-',
        net_loss_from_returns: '-',
    },
    {
        id: '3',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_sold_vs_returned: '-',
        return_rate: '-',
        refund_amount: '-',
        return_reasons_breakdown: '-',
        net_loss_from_returns: '-',
    },
    {
        id: '4',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_sold_vs_returned: '-',
        return_rate: '-',
        refund_amount: '-',
        return_reasons_breakdown: '-',
        net_loss_from_returns: '-',
    },
    {
        id: '5',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_sold_vs_returned: '-',
        return_rate: '-',
        refund_amount: '-',
        return_reasons_breakdown: '-',
        net_loss_from_returns: '-',
    },
];

const AnalyticsRefundsAndReturns = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Refunds and Returns:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">
                    <FilterOptionsOne />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <SelectCustom id="days" selectList={selectListTime} customStyle={'w-[10rem] font-semibold'} placeholder={'Days'} />
                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    );
};

export default AnalyticsRefundsAndReturns;