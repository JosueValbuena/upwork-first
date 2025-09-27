import { FilterOptionsOne } from "@/components/molecules"
import { TableCustomThree } from "@/components/organism"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const tableHeader: string[] = [
    'SKU',
    'ASIN',
    'Product Title',
    'Units in Stock',
    'Average Inventory Age',
    'Cost Per Units',
    'Total Value',
    'Marketplace',
    'Storage Type'
];

interface MockDataItem {
    id: string,
    sku: string,
    asin: string,
    product_title: string,
    units_in_stock: string,
    average_inventory_age: string,
    cost_per_units: string,
    total_value: string,
    marketplace: string,
    storage_type: string
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        sku: '-',
        asin: '-',
        product_title: '-',
        units_in_stock: '-',
        average_inventory_age: '-',
        cost_per_units: '-',
        total_value: '-',
        marketplace: '-',
        storage_type: '-',
    },
    {
        id: '2',
        sku: '-',
        asin: '-',
        product_title: '-',
        units_in_stock: '-',
        average_inventory_age: '-',
        cost_per_units: '-',
        total_value: '-',
        marketplace: '-',
        storage_type: '-',
    },
    {
        id: '3',
        sku: '-',
        asin: '-',
        product_title: '-',
        units_in_stock: '-',
        average_inventory_age: '-',
        cost_per_units: '-',
        total_value: '-',
        marketplace: '-',
        storage_type: '-',
    },
    {
        id: '4',
        sku: '-',
        asin: '-',
        product_title: '-',
        units_in_stock: '-',
        average_inventory_age: '-',
        cost_per_units: '-',
        total_value: '-',
        marketplace: '-',
        storage_type: '-',
    },
    {
        id: '5',
        sku: '-',
        asin: '-',
        product_title: '-',
        units_in_stock: '-',
        average_inventory_age: '-',
        cost_per_units: '-',
        total_value: '-',
        marketplace: '-',
        storage_type: '-',
    },
];

const AnalitycsAgedInventory = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Aged Inventory:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <div className="flex items-center bg-white px-2 rounded-lg">
                        <p className="text-xs font-bold mr-1.5">Age Threshold:</p>
                        <div className="p-2 rounded-md flex">
                            <Button className="text-xs px-2 h-6 mx-2 bg-purple-500 ">90 Days</Button>
                            <Button className="text-xs px-2 mx-2 h-6 text-foreground bg-primary-light  hover:text-white">180 Days</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    );
};

export default AnalitycsAgedInventory;