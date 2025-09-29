import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const IncomeSection = () => {
    return (
        <Table className="min-w-full border border-gray-200">
            <TableHeader>
                <TableRow className="bg-white">
                    <TableHead className="font-bold w-xs">Income Section:</TableHead>
                    <TableHead className="font-bold text-center">Week 1</TableHead>
                    <TableHead className="font-bold text-center">Week 2</TableHead>
                    <TableHead className="font-bold text-center">Week 3</TableHead>
                    <TableHead className="font-bold text-center">Week 4</TableHead>
                    <TableHead className="font-bold text-center">Total</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow className="bg-primary-light">
                    <TableCell>
                        Gross Sales
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
                    <TableCell>
                        Refunds/Returns
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

                <TableRow className="bg-primary-xlight">
                    <TableCell colSpan={6}>
                        Net Sales
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

                <TableRow className="bg-primary-xlight">
                    <TableCell colSpan={6}>
                        Other Income
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

export default IncomeSection