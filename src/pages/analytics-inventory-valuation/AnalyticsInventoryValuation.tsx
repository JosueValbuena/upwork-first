import { FilterOptionsOne, PickupCalendar } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const tableHeader: string[] = [
    'SKU',
    'ASIN',
    'Product Title',
    'Brand',
    'Marketplace',
    'Fulfilled By Who',
    'On-Hand Quantity',
    'Cost Per Unit',
    'My Price',
    'Total Cost Value',
    'Total Retail Value',
    'Category'
];

interface MockDataItem {
    id: string,
    sku: string,
    asin: string,
    product_title: string,
    brand: string,
    marketplace: string,
    fulfilled_by_who: string,
    on_hand_quantity: string,
    cost_per_unit: string,
    my_price: string,
    total_cost_value: string,
    total_retail_value: string,
    category: string
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        fulfilled_by_who: '-',
        on_hand_quantity: '-',
        cost_per_unit: '-',
        my_price: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        category: '-',
    },
    {
        id: '2',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        fulfilled_by_who: '-',
        on_hand_quantity: '-',
        cost_per_unit: '-',
        my_price: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        category: '-',
    },
    {
        id: '3',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        fulfilled_by_who: '-',
        on_hand_quantity: '-',
        cost_per_unit: '-',
        my_price: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        category: '-',
    },
    {
        id: '4',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        fulfilled_by_who: '-',
        on_hand_quantity: '-',
        cost_per_unit: '-',
        my_price: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        category: '-',
    },
    {
        id: '5',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        fulfilled_by_who: '-',
        on_hand_quantity: '-',
        cost_per_unit: '-',
        my_price: '-',
        total_cost_value: '-',
        total_retail_value: '-',
        category: '-',
    },
];

const AnalyticsInventoryValuation = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Inventory Valuation:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

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

export default AnalyticsInventoryValuation;