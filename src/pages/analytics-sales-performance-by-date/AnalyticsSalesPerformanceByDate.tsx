import { SelectCustom } from "@/components/atoms";
import { FilterOptionsOne } from "@/components/molecules";
import { ChartsLinear, TableCustomThree } from "@/components/organism";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { SelectListItem } from "@/types";

const selectListTime: SelectListItem[] = [
    {
        value: '30',
        label: 'Past 30 Days'
    }
];

const tableHeader: string[] = [
    'Period',
    'Units Sold',
    'Gross Sales',
    'Net Sales',
    'Cost of Good sold',
    'Total Profit ',
    'Profit Margin %',
    'Number',
    'Buybox %'
];

interface MockDataItem {
    id: String,
    period: String,
    units_sold: String,
    gross_sales: String,
    net_sales: String,
    cost_of_good_sold: String,
    total_profit: String,
    profit_margin: String,
    number: String,
    buybox: String,
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        period: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_good_sold: '-',
        total_profit: '-',
        profit_margin: '-',
        number: '-',
        buybox: '-'
    },
    {
        id: '2',
        period: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_good_sold: '-',
        total_profit: '-',
        profit_margin: '-',
        number: '-',
        buybox: '-'
    },
    {
        id: '3',
        period: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_good_sold: '-',
        total_profit: '-',
        profit_margin: '-',
        number: '-',
        buybox: '-'
    },
    {
        id: '4',
        period: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_good_sold: '-',
        total_profit: '-',
        profit_margin: '-',
        number: '-',
        buybox: '-'
    },
    {
        id: '5',
        period: '-',
        units_sold: '-',
        gross_sales: '-',
        net_sales: '-',
        cost_of_good_sold: '-',
        total_profit: '-',
        profit_margin: '-',
        number: '-',
        buybox: '-'
    },
];

const AnalyticsSalesPerformanceByDate = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Sales Performance By Date:
                </h1>

                <div className="bg-white mt-3">
                    <ChartsLinear />
                </div>

                <div className="flex mt-2 flex-row items-center gap-3">

                    <FilterOptionsOne />

                    <Separator orientation="vertical" />

                    <div className="flex items-center bg-white px-2 rounded-lg">
                        <p className="text-xs font-bold mr-1.5">Group By:</p>
                        <div className="bg-background-primary-customized p-2 rounded-md flex">
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
    );
};

export default AnalyticsSalesPerformanceByDate;