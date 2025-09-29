import { SelectCustom } from "@/components/atoms";
import { PickupCalendar } from "@/components/molecules";
import { TableCustomThree } from "@/components/organism";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { SelectListItem } from "@/types";

const selectListShipmentStatus: SelectListItem[] = [
    {
        value: 'in transit',
        label: 'In Transit'
    },
    {
        value: 'delivered',
        label: 'Delivered'
    },
    {
        value: 'checked-in',
        label: 'Checked-In'
    },
    {
        value: 'closed',
        label: 'Closed'
    },
    {
        value: 'receiving',
        label: 'Receiving'
    }
];

const selectListMartketplace: SelectListItem[] = [
    {
        value: 'marketplace',
        label: 'Marketplace'
    },
];

const tableHeader: string[] = [
    'Shipment ID',
    'Creation Date / Ship Date / Received Date',
    'Ship From & Ship To Location',
    'Status',
    'Total Units Shipped vs Units Received',
    'Discrepancy Count & Value',
    'Estimated vs Actual Delivery Time'
];

interface MockDataItem {
    id: string,
    shipment_id: string,
    creation_ship_received_date: string,
    ship_from_to_location: string,
    status: string,
    units_shipped_vs_received: string,
    discrepancy_count_value: string,
    estimated_vs_actual_delivery_time: string,
}

const tableMockData: MockDataItem[] = [
    {
        id: '1',
        shipment_id: '-',
        creation_ship_received_date: '-',
        ship_from_to_location: '-',
        status: '-',
        units_shipped_vs_received: '-',
        discrepancy_count_value: '-',
        estimated_vs_actual_delivery_time: '-',
    },
    {
        id: '2',
        shipment_id: '-',
        creation_ship_received_date: '-',
        ship_from_to_location: '-',
        status: '-',
        units_shipped_vs_received: '-',
        discrepancy_count_value: '-',
        estimated_vs_actual_delivery_time: '-',
    },
    {
        id: '3',
        shipment_id: '-',
        creation_ship_received_date: '-',
        ship_from_to_location: '-',
        status: '-',
        units_shipped_vs_received: '-',
        discrepancy_count_value: '-',
        estimated_vs_actual_delivery_time: '-',
    },
    {
        id: '4',
        shipment_id: '-',
        creation_ship_received_date: '-',
        ship_from_to_location: '-',
        status: '-',
        units_shipped_vs_received: '-',
        discrepancy_count_value: '-',
        estimated_vs_actual_delivery_time: '-',
    },
    {
        id: '5',
        shipment_id: '-',
        creation_ship_received_date: '-',
        ship_from_to_location: '-',
        status: '-',
        units_shipped_vs_received: '-',
        discrepancy_count_value: '-',
        estimated_vs_actual_delivery_time: '-',
    },
];


const AnalyticsInboundShipments = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-primary-light h-full md:px-5">
            <div className="max-w-[1920px] w-full mx-auto">
                <h1 className='text-2xl font-semibold'>
                    Inbound Shipments:
                </h1>

                <div className="flex mt-2 flex-row items-center gap-3">
                    {/* <FilterOptionsOne /> */}
                    <PickupCalendar placeHolder={'Start Date'} />

                    <PickupCalendar placeHolder={'End Date'} />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <div className="flex items-center gap-4">
                        <label htmlFor="shiptment-id" className="whitespace-nowrap">Shipment ID</label>
                        <Input placeholder="Shipment ID" id="shiptment-id" className="bg-white" />
                        <Button type="submit" variant="default" className="cursor-pointer">
                            Search
                        </Button>
                    </div>

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <SelectCustom id="days" selectList={selectListMartketplace} customStyle={'w-[10rem] font-semibold'} placeholder={'Days'} />

                    <div className="w-6 h-full rotate-90">
                        <Separator orientation="horizontal" />
                    </div>

                    <SelectCustom id="days" selectList={selectListShipmentStatus} customStyle={'w-[10rem] font-semibold'} placeholder={'Days'} />

                </div>

                <div className="mt-3">
                    <TableCustomThree headers={tableHeader} data={tableMockData} />
                </div>

            </div>
        </div>
    );
};

export default AnalyticsInboundShipments;