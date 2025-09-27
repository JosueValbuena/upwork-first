import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface TableCustomThreeInterface {
    headers: string[],
    data: any[]
};

const TableCustomThree = ({ headers, data }: TableCustomThreeInterface) => {
    console.log({ data })
    return (
        <Table>
            <TableHeader className="bg-white">
                <TableRow>
                    {
                        headers
                        && Array.isArray(headers)
                        && headers.map((header: string) => (
                            <TableHead
                                key={header}
                                className="text-center font-semibold text-xs"
                            >
                                {header}
                            </TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    data
                    && Array.isArray(data)
                    && data.map((item: any, index: number) => (
                        <TableRow key={index} className={index % 2 === 0 ? 'bg-primary-light' : 'bg-primary-xlight'}>
                            {
                                Object.entries(item).map(([key, value]) => {
                                    if (key !== 'id') {
                                        return (
                                            <TableCell key={key} className="text-center text-xs">
                                                {value as string}
                                            </TableCell>
                                        );
                                    }
                                    return null;
                                })
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
};

export default TableCustomThree;