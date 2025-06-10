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

interface TableCustomTwo {
    tableHeadTitles: any,
    tableContent: any,
    customizeHeader?: string
}

const TableCustomTwo = ({ tableHeadTitles, tableContent, customizeHeader }: TableCustomTwo) => {
    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className={customizeHeader ? customizeHeader : ''}>
                <TableRow>
                    {tableHeadTitles.map((title: string) => (
                        <TableHead className="font-semibold text-md">{title}</TableHead>
                    ))}
                    {/* <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableContent.map((element: any) => (
                    <TableRow key={element?.active_marketplaces}>
                        {Object.values(element).map((elementValue: any) => (
                            <TableCell className="font-medium">{elementValue}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

export default TableCustomTwo;