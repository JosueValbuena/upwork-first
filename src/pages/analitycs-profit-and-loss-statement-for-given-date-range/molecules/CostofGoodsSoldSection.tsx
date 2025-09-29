import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const CostofGoodsSoldSection = () => {
    return (
        <Table className="min-w-full border border-gray-200">
            <TableHeader>
                <TableRow className="bg-white">
                    <TableHead className="font-bold">Cost of Goods Sold:</TableHead>
                    <TableHead className="font-bold text-center">Week 1</TableHead>
                    <TableHead className="font-bold text-center">Week 2</TableHead>
                    <TableHead className="font-bold text-center">Week 3</TableHead>
                    <TableHead className="font-bold text-center">Week 4</TableHead>
                    <TableHead className="font-bold text-center">Total</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow className="bg-primary-light">
                    <TableCell colSpan={6}>
                        COGS
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell >

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>
                </TableRow>

                <TableRow className="bg-primary-xlight">
                    <TableCell colSpan={6}>
                        Gross Profit
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>

                    <TableCell className="text-center">
                        -
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CostofGoodsSoldSection;