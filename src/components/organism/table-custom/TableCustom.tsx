import { useEffect, useMemo, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconArrowDownBlack } from "@/utils/icons";

const TableCustom = ({ dataTable }: any) => {

    const [dataSorted, setDataSorted] = useState([...dataTable]);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [sortKey, setSortKey] = useState<string | null>(null);

    const dinamicWidth: Number = useMemo(() => {
        return 100 / (dataTable[0] ? Object.keys(dataTable[0]).length : 1);
    }, [dataTable]);

    const onSortData = (newSortKey: string) => {
        if (newSortKey === sortKey) {
            setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortKey(newSortKey);
            setSortDirection('asc');
        }
    };

    useEffect(() => {
        if (sortKey) {
            const sorted = [...dataTable].sort((a:any, b:any): number => {
                const valueA = a[sortKey];
                const valueB = b[sortKey];

                let result;

                if (sortDirection === 'asc') {
                    if (typeof valueA === 'string' && typeof valueB === 'string') {
                        result =  valueA.localeCompare(valueB)
                    };

                    if (typeof valueA === 'number' && typeof valueB === 'number') {
                        result = valueA - valueB
                    }
                };

                if (sortDirection === 'desc') {
                    if (typeof valueA === 'string' && typeof valueB === 'string') {
                        result = valueB.localeCompare(valueA)
                    };

                    if (typeof valueA === 'number' && typeof valueB === 'number') {
                        result = valueB - valueA
                    };
                };
                return Number(result)
            });
            setDataSorted(sorted);
        } else {
            setDataSorted([...dataTable]);
        }
    }, [sortKey, sortDirection, dataTable]);

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-primary-light">
                    {Object.keys(dataTable[0] || {}).map((dataElement: string) => (
                        <TableHead
                            key={dataElement}
                            className={`text-center whitespace-break-spaces capitalize max-w-[${dinamicWidth}%]`}
                            onClick={() => onSortData(dataElement)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="flex items-center justify-center">
                                {dataElement.replaceAll("_", " ")}
                                <IconArrowDownBlack
                                    className={`ml-2 ${sortKey === dataElement ? (sortDirection === 'asc' ? '' : 'rotate-180') : 'opacity-50'}`}
                                />
                            </div>
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataSorted.map((data: any, index: any) => (
                    <TableRow key={index} className={index % 2 === 0 ? '' : 'bg-primary-xlight'}>
                        {Object.values(data)?.map((dataValues, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                className={`max-w-[10rem] text-center`}
                            >
                                <TooltipProvider>
                                    <Tooltip >
                                        <TooltipTrigger className="max-w-[10rem]">
                                            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-center w-full">
                                                {/* @ts-ignore */}
                                                {dataValues}
                                            </p>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {/* @ts-ignore */}
                                            <p>{dataValues}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableCustom;