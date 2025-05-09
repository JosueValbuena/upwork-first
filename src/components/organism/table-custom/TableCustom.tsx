import {
    Table,
    TableBody,
    /* TableCaption, */
    TableCell,
    /* TableFooter, */
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const dataTable = [
    {
        sku: "BO8S6X211YASIN",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe - Storm Blue/Pink/Aqua - 8 Medium",
        price_changes: "$12 $15",
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASIN",
        title: "Brooks Women's Adrenaline GTS 23 Suooirtuve Running Shoe",
        price_changes: "$12 $15",
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASIN",
        title: "Brooks Women's Adrenaline GTS",
        price_changes: "$12 $15",
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASIN",
        title: "Brooks Women's Adrenaline GTS 23",
        price_changes: "$12 $15",
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
    {
        sku: "BO8S6X211YASIN",
        title: "Brooks Women's Adrenaline GTS 23",
        price_changes: "$12 $15",
        reason: "Competitor",
        update_date: "12-02-25 7:12pm"
    },
]

const TableCustom = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-violet-100">
                    {Object.keys(dataTable[0]).map((dataElement: string) => (
                        <TableHead className="text-center capitalize">{dataElement.replaceAll("_", " ")}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataTable.map((data, index) => (
                    <TableRow key={data.sku} className={index % 2 === 0 ? '' : 'bg-violet-50'}>
                        {Object.values(data).map(dataValues => (
                            <TableCell className="grow-1 whitespace-break-spaces">
                                {dataValues}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

export default TableCustom;