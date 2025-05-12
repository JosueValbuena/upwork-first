import { useMemo } from "react";
import {
    Table,
    TableBody,
    /* TableCaption, */
    TableCell,
    /* TableFooter, */
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


const TableCustom = ({ dataTable }: any) => {

    const dinamicWidth: Number = useMemo(() => {
        return 100 / dataTable.length;
    }, [dataTable]);

    const generateRandomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    /* const transformData = useMemo(() => {
        return dataTable.map((dataElement: any) => ({
            id: generateRandomId(), // Genera el ID y lo asigna a la clave 'id'
            ...dataElement,       // Incluye todas las propiedades del dataElement
        }));
    }, [dataTable]); */

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-primary-light">
                    {Object.keys(dataTable[0])?.map((dataElement: string) => (
                        <TableHead key={dataElement} className={`text-center whitespace-break-spaces capitalize max-w-[${dinamicWidth}%]`}>{dataElement.replaceAll("_", " ")}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataTable.map((data: any, index: any) => (
                    <TableRow key={data.sku} className={index % 2 === 0 ? '' : 'bg-violet-50'}>
                        {Object.values(data)?.map((dataValues) => (
                            <TableCell
                                // @ts-ignore
                                key={dataValues || generateRandomId()}
                                className={` 
                                    max-w-[10rem] text-center`}
                            >
                                <TooltipProvider>
                                    <Tooltip >
                                        <TooltipTrigger className="max-w-[10rem]">
                                            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-center w-full">
                                                {/*@ts-ignore */}
                                                {dataValues}
                                            </p>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            {/*@ts-ignore */}
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