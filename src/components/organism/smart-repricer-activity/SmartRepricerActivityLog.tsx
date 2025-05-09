import TableCustom from "../table-custom/TableCustom"

const SmartRepricerActivityLog = () => {
    return (
        <div className="bg-white grow-1 p-5 w-full">
            <p className="text-lg font-semibold ml-5">Smart Repricer Activity Log</p>

            <div className="mt-3">
                <TableCustom />
            </div>
        </div>
    )
}

export default SmartRepricerActivityLog