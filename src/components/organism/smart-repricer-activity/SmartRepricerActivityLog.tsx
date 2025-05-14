import { useState } from "react"

import { Button } from "@/components/ui/button"
import { IconArrowDownContainedRed, IconArrowRiseContainedGreen } from "@/utils/icons"

import TableCustom from "../table-custom/TableCustom"

const dataTable = [
    {
        sku: "BO8S6X211YASINA",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINB",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINC",
        title: "Brooks Women's Adrenaline GTS",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASIND",
        title: "Brooks Women's Adrenaline GTS 23",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINE",
        title: "Brooks Women's Adrenaline GTS 23",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINF",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASING",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINH",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINI",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINJ",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINK",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINL",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINM",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINN",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINP",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINP",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINQ",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINR",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: <p className="flex">$12 {<IconArrowRiseContainedGreen />} $15</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASINS",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: <p className="flex">$15 {<IconArrowDownContainedRed />} $12</p>,
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
]

const SmartRepricerActivityLog = () => {

    const [tableResults, setTableResults] = useState(5);

    const resultsToShow = dataTable.slice(0, tableResults) ?? [];

    const onLoadingData = () => {
        setTableResults(prevValue => prevValue + 5)
    };

    const onResetData = () => {
        setTableResults(5)
    };

    return (
        <div className="bg-background-secondary-customized grow-1 p-5 w-full">
            <p className="text-lg font-semibold ml-5">Smart Repricer Activity Log</p>

            <div className="mt-3 flex flex-col">
                <TableCustom dataTable={resultsToShow} />
                <Button
                    className="mt-3 bg-primary-light text-foreground mx-auto hover:text-white "
                    onClick={onLoadingData}
                >
                    Load More
                </Button>
                {resultsToShow.length > 5 && (
                    <Button
                        className="mt-3 bg-primary-light text-foreground mx-auto hover:text-white "
                        onClick={onResetData}
                    >
                        Reset
                    </Button>
                )}
            </div>
        </div>
    )
}

export default SmartRepricerActivityLog