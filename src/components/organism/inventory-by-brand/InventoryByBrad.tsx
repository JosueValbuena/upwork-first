import TableCustom from "../table-custom/TableCustom"

const InventoryByBrand = () => {
    return (
        <div className="bg-white grow-1 p-5 w-full max-w-[1280px] mx-auto mt-3">
            <div className="flex">
                <p className="text-lg font-semibold ml-5">Inventory by brand</p>

                <div className="flex ml-auto">
                    <div>
                        <p>Past 30 Days</p>
                    </div>
                    <div>
                        <p>By Category</p>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <TableCustom />
            </div>

        </div>
    )
}

export default InventoryByBrand