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
import { useMemo } from "react";


const TableCustom = ({dataTable}:any) => {

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
                <TableRow className="bg-violet-100">
                    {Object.keys(dataTable[0])?.map((dataElement: string) => (
                        <TableHead key={dataElement} className={`text-center whitespace-break-spaces capitalize w-[${dinamicWidth}%]`}>{dataElement.replaceAll("_", " ")}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataTable.map((data:any, index:any) => (
                    <TableRow key={data.sku} className={index % 2 === 0 ? '' : 'bg-violet-50'}>
                        {Object.values(data)?.map((dataValues) => (
                            <TableCell
                            // @ts-ignore
                                key={dataValues || generateRandomId()}
                                className={`whitespace-break-spaces text-center w-[${dinamicWidth}%]`}
                            >
                                {/*@ts-ignore */}
                                {dataValues}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableCustom;