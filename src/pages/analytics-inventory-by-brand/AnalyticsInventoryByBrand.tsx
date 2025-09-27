import { FilterOptionsOne, PickupCalendar } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const tableHeader: string[] = [
    'Brand',
    'On-Hand Quantity',
    'Total Cost',
    'Total Cost Value',
    'Total Retail Value',
    'Total Potential Profit After Sold',
    'Category',
];

interface MockDataItem {
    id: string,
    brand: string,
    on_hand_quantity: string,
    total_cost: string,
    total_cost_value: string,
    total_retail_value: string,
    total_potential_profit_after_sold: string,
    category: string,
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        brand: '-',
        on_hand_quantity: '-',
        total_cost: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        total_potential_profit_after_sold: '-',
        category: '-',
    },
    {
        id: '2',
        brand: '-',
        on_hand_quantity: '-',
        total_cost: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        total_potential_profit_after_sold: '-',
        category: '-',
    },
    {
        id: '3',
        brand: '-',
        on_hand_quantity: '-',
        total_cost: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        total_potential_profit_after_sold: '-',
        category: '-',
    },
    {
        id: '4',
        brand: '-',
        on_hand_quantity: '-',
        total_cost: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        total_potential_profit_after_sold: '-',
        category: '-',
    },
    {
        id: '5',
        brand: '-',
        on_hand_quantity: '-',
        total_cost: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        total_potential_profit_after_sold: '-',
        category: '-',
    },
];

const AnalyticsInventoryByBrand = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Inventory By Brand:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />

                    <div className="flex items-center bg-white px-2 rounded-lg">
                        <p className="text-xs font-bold mr-1.5">Group By:</p>
                        <div className="p-2 rounded-md flex">
                            <Button className="text-xs px-2 h-6 mx-2 bg-purple-500 ">Brand</Button>
                            <Button className="text-xs px-2 mx-2 h-6 text-foreground bg-primary-light  hover:text-white">Category</Button>
                        </div>
                    </div>

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

export default AnalyticsInventoryByBrand;