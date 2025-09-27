import { FilterOptionsOne, PickupCalendar } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Separator } from "@/components/ui/separator";

const tableHeader: string[] = [
    'Marketplace',
    'Unit Sold',
    'Gross Sales',
    'Net Sales',
    'Cost of Goods Sold',
    'Total Profit',
    'Profit Per Unit',
    'ROI%',
    'Profit Margin',
    'Number of Orders',
    'Average Selling Price'
];

interface MockDataItem {
    id: string,
    marketplace: string,
    unit_sold: string,
    gross_sales: string,
    net_sales: string,
    cost_of_goods_sold: string,
    total_profit: string,
    profit_per_unit: string,
    roi_percentage: string,
    profit_margin: string,
    number_of_orders: string,
    average_selling_price: string
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        marketplace: '-',
        unit_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi_percentage: '-',
        profit_margin: '-',
        number_of_orders: '-',
        average_selling_price: '-',
    },
    {
        id: '2',
        marketplace: '-',
        unit_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi_percentage: '-',
        profit_margin: '-',
        number_of_orders: '-',
        average_selling_price: '-',
    },
    {
        id: '3',
        marketplace: '-',
        unit_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi_percentage: '-',
        profit_margin: '-',
        number_of_orders: '-',
        average_selling_price: '-',
    },
    {
        id: '4',
        marketplace: '-',
        unit_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi_percentage: '-',
        profit_margin: '-',
        number_of_orders: '-',
        average_selling_price: '-',
    },
    {
        id: '5',
        marketplace: '-',
        unit_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi_percentage: '-',
        profit_margin: '-',
        number_of_orders: '-',
        average_selling_price: '-',
    },
];

const AnalyticsSalesByBrand = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Sales by Brand:
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

export default AnalyticsSalesByBrand;