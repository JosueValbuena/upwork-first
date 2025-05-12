import { IconArrowDownContainedRed, IconArrowRiseContainedGreen } from "@/utils/icons"
import TableCustom from "../table-custom/TableCustom"

const dataTable = [
    {
        sku: "BO8S6X211YASINA",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 ${<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINB",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 ${<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINC",
        title: "Brooks Women's Adrenaline GTS",
        price_changes: <p className="flex">$12 ${<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASIND",
        title: "Brooks Women's Adrenaline GTS 23",
        price_changes: <p className="flex">$12 ${<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINE",
        title: "Brooks Women's Adrenaline GTS 23",
        price_changes: <p className="flex">$15 ${<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
]

const SmartRepricerActivityLog = () => {
    return (
        <div className="bg-white grow-1 p-5 w-full">
            <p className="text-lg font-semibold ml-5">Smart Repricer Activity Log</p>

            <div className="mt-3">
                <TableCustom dataTable={dataTable} />
            </div>
        </div>
    )
}

export default SmartRepricerActivityLog