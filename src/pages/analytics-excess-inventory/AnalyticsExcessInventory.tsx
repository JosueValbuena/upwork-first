import { FilterOptionsOne } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";

const tableHeader: string[] = [
    'SKU',
    'ASIN',
    'Product Title',
    'Brand',
    'Marketplace',
    'On-Hand Quantity',
    '30 Days Unit Sold',
    'Days of Supply',
    'Cost Per Unit',
    'Total Cost Value',
    'Category',
    'Fulfilled By (FBA/FBM/A)',
];

interface MockDataItem {
    id: string,
    sku: string,
    asin: string,
    product_title: string,
    brand: string,
    marketplace: string,
    on_hand_quantity: string,
    thirty_days_unit_sold: string,
    days_of_supply: string,
    cost_per_unit: string,
    total_cost_value: string,
    category: string,
    fulfilled_by: string,
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        on_hand_quantity: '-',
        thirty_days_unit_sold: '-',
        days_of_supply: '-',
        cost_per_unit: '-',
        total_cost_value: '-',
        category: '-',
        fulfilled_by: '-',
    },
    {
        id: '2',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        on_hand_quantity: '-',
        thirty_days_unit_sold: '-',
        days_of_supply: '-',
        cost_per_unit: '-',
        total_cost_value: '-',
        category: '-',
        fulfilled_by: '-',
    },
    {
        id: '3',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        on_hand_quantity: '-',
        thirty_days_unit_sold: '-',
        days_of_supply: '-',
        cost_per_unit: '-',
        total_cost_value: '-',
        category: '-',
        fulfilled_by: '-',
    },
    {
        id: '4',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        on_hand_quantity: '-',
        thirty_days_unit_sold: '-',
        days_of_supply: '-',
        cost_per_unit: '-',
        total_cost_value: '-',
        category: '-',
        fulfilled_by: '-',
    },
    {
        id: '5',
        sku: '-',
        asin: '-',
        product_title: '-',
        brand: '-',
        marketplace: '-',
        on_hand_quantity: '-',
        thirty_days_unit_sold: '-',
        days_of_supply: '-',
        cost_per_unit: '-',
        total_cost_value: '-',
        category: '-',
        fulfilled_by: '-',
    },
];

const AnalyticsExcessInventory = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Excess Inventory:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />
                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    );
};

export default AnalyticsExcessInventory;