import TableCustom from "../table-custom/TableCustom"

const dataTable = [
    {
        market_place_name: null,
        region: null,
        status: null
    }
]

const ComptiterTragetingSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-1">
            <p className="text-xl font-semibold">Comptiter Trageting</p>
            <div>
                <TableCustom dataTable={dataTable} />
            </div>
        </div>
    )
}

export default ComptiterTragetingSection