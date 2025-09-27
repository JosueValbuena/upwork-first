import { FilterOptionsOne, PickupCalendar } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Separator } from "@/components/ui/separator";

const tableHeader: string[] = [
    'SKU',
    'UPC/EAN',
    'ASIN',
    'FNSKU',
    'Product Link',
    'SalesRank',
    'Page Views',
    'Session',
    'Brand',
    'Size',
    'Title',
];

interface MockDataItem {
    id: string,
    sku: string,
    upc_ean: string,
    asin: string,
    fnsku: string,
    product_link: string,
    sales_rank: string,
    page_views: string,
    session: string,
    brand: string,
    size: string,
    title: string,
};

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        sku: '-',
        upc_ean: '-',
        asin: '-',
        fnsku: '-',
        product_link: '-',
        sales_rank: '-',
        page_views: '-',
        session: '-',
        brand: '-',
        size: '-',
        title: '-',
    },
    {
        id: '2',
        sku: '-',
        upc_ean: '-',
        asin: '-',
        fnsku: '-',
        product_link: '-',
        sales_rank: '-',
        page_views: '-',
        session: '-',
        brand: '-',
        size: '-',
        title: '-',
    },
    {
        id: '3',
        sku: '-',
        upc_ean: '-',
        asin: '-',
        fnsku: '-',
        product_link: '-',
        sales_rank: '-',
        page_views: '-',
        session: '-',
        brand: '-',
        size: '-',
        title: '-',
    },
    {
        id: '4',
        sku: '-',
        upc_ean: '-',
        asin: '-',
        fnsku: '-',
        product_link: '-',
        sales_rank: '-',
        page_views: '-',
        session: '-',
        brand: '-',
        size: '-',
        title: '-',
    },
    {
        id: '5',
        sku: '-',
        upc_ean: '-',
        asin: '-',
        fnsku: '-',
        product_link: '-',
        sales_rank: '-',
        page_views: '-',
        session: '-',
        brand: '-',
        size: '-',
        title: '-',
    },
];

const AnalyticsActiveInventoryReport = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Active Inventory Report:
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

export default AnalyticsActiveInventoryReport;