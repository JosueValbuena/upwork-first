import { SelectCustom } from "@/components/atoms";
import { FilterOptionsOne } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    'Units in Stock',
    'Units Sold',
    'Inventory Turnover Ratio',
    'Days of Supply',
    'Sell-Through Rate %',
    'Restock Recommendation Date & Qty'
];

interface MockDataItem {
    id: string;
    sku: string;
    asin: string;
    title: string;
    image: string;
    units_in_stock: string;
    units_sold: string;
    inventory_turnover_ratio: string;
    days_of_supply: string;
    sell_through_rate: string;
    restock_recommendation: string;
}

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_in_stock: '-',
        units_sold: '-',
        inventory_turnover_ratio: '-',
        days_of_supply: '-',
        sell_through_rate: '-',
        restock_recommendation: '-',
    },
    {
        id: '2',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_in_stock: '-',
        units_sold: '-',
        inventory_turnover_ratio: '-',
        days_of_supply: '-',
        sell_through_rate: '-',
        restock_recommendation: '-',
    },
    {
        id: '3',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_in_stock: '-',
        units_sold: '-',
        inventory_turnover_ratio: '-',
        days_of_supply: '-',
        sell_through_rate: '-',
        restock_recommendation: '-',
    },
    {
        id: '4',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_in_stock: '-',
        units_sold: '-',
        inventory_turnover_ratio: '-',
        days_of_supply: '-',
        sell_through_rate: '-',
        restock_recommendation: '-',
    },
    {
        id: '5',
        sku: '-',
        asin: '-',
        title: '-',
        image: '-',
        units_in_stock: '-',
        units_sold: '-',
        inventory_turnover_ratio: '-',
        days_of_supply: '-',
        sell_through_rate: '-',
        restock_recommendation: '-',
    },
];

const AnalitycsInventoryTurnOver = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Inventory Turnover Report:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">
                    <FilterOptionsOne />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <SelectCustom id="days" selectList={selectListTime} customStyle={'w-[10rem] font-semibold'} placeholder={'Days'} />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <div className="flex items-center gap-4">
                        <label htmlFor="shiptment-id" className="whitespace-nowrap">SKU Search</label>
                        <Input placeholder="Shipment ID" id="shiptment-id" className="bg-white" />
                        <Button type="submit" variant="default" className="cursor-pointer">
                            Search
                        </Button>
                    </div>

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    );
};

export default AnalitycsInventoryTurnOver;