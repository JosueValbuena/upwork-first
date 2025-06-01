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
    tableContent: any
}

const TableCustomTwo = ({ tableHeadTitles, tableContent }: TableCustomTwo) => {
    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    {tableHeadTitles.map((title: string) => (
                        <TableHead className="font-bold text-xl">{title}</TableHead>
                    ))}
                    {/* <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableContent.map((element: any) => (
                    <TableRow key={element?.active_marketplaces}>
                        <TableCell className="font-medium">{element?.active_marketplaces}</TableCell>
                        <TableCell>{element?.seller_ID}</TableCell>
                        <TableCell>{element?.status}</TableCell>
                        <TableCell className="text-right">{element?.action}</TableCell>
                    </TableRow>
                ))}
                {/*              {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))} */}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
};

export default TableCustomTwo;