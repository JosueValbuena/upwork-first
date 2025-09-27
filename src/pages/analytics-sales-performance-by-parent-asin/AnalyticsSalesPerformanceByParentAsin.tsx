import { SelectCustom } from "@/components/atoms";
import { FilterOptionsOne } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Button } from "@/components/ui/button";
import type { SelectListItem } from "@/types";
import { Separator } from "@/components/ui/separator"

const selectListTime: SelectListItem[] = [
    {
        value: '30',
        label: 'Past 30 Days'
    }
];

const tableHeader: string[] = [
    'Parent ASIN',
    'Parent Title',
    'Units Sold',
    'Gross Sales',
    'Net Sales',
    'Goods Sold',
    'Total Profit',
    'Profit Per Unit',
    'ROI %',
    'Profit Margin %',
    'Number of Orders',
    'Selling Price',
    'BUYBOX %'
];

interface MockDataItem {
    id: string,
    parent_ASIN: string,
    parent_title: string,
    units_sold: string,
    gross_sales: string,
    net_sales: string,
    goods_sold: string,
    total_profit: string,
    profit_per_unit: string,
    roi: string,
    profit_margin: string,
    number_of_orders: string,
    selling_price: string,
    buybox: string
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        parent_ASIN: '-',
        parent_title: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi: '-',
        profit_margin: '-',
        number_of_orders: '-',
        selling_price: '-',
        buybox: '-',
    },
    {
        id: '2',
        parent_ASIN: '-',
        parent_title: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi: '-',
        profit_margin: '-',
        number_of_orders: '-',
        selling_price: '-',
        buybox: '-',
    },
    {
        id: '3',
        parent_ASIN: '-',
        parent_title: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi: '-',
        profit_margin: '-',
        number_of_orders: '-',
        selling_price: '-',
        buybox: '-',
    },
    {
        id: '4',
        parent_ASIN: '-',
        parent_title: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi: '-',
        profit_margin: '-',
        number_of_orders: '-',
        selling_price: '-',
        buybox: '-',
    },
    {
        id: '5',
        parent_ASIN: '-',
        parent_title: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        goods_sold: '-',
        total_profit: '-',
        profit_per_unit: '-',
        roi: '-',
        profit_margin: '-',
        number_of_orders: '-',
        selling_price: '-',
        buybox: '-',
    },
];

const AnalyticsSalesPerformanceByParentAsin = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Sales Performance by Parent ASIN :
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />

                    <Separator orientation="vertical" />

                    <div className="flex items-center bg-white px-2 rounded-lg">
                        <p className="text-xs font-bold mr-1.5">Group By:</p>
                        <div className="p-2 rounded-md flex">
                            <Button className="text-xs px-2 h-6 mx-2 bg-purple-500 ">By Day</Button>
                            <Button className="text-xs px-2 mx-2 h-6 text-foreground bg-primary-light  hover:text-white">By Month</Button>
                            <Button className="text-xs px-2 mx-2 h-6 text-foreground bg-primary-light  hover:text-white">By Year</Button>
                        </div>
                    </div>

                    <Separator orientation="vertical" />

                    <SelectCustom id="days" selectList={selectListTime} customStyle={'w-[10rem] font-semibold'} placeholder={'Days'} />
                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    )
};

export default AnalyticsSalesPerformanceByParentAsin;