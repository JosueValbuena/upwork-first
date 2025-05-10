import TableCustom from "../table-custom/TableCustom"

const dataTable = [
    {
        brand_name: "name",
        units_in_stock: "120",
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name",
        units_in_stock: "120",
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name",
        units_in_stock: "120",
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name",
        units_in_stock: "120",
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name",
        units_in_stock: "120",
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
]

const InventoryByBrand = () => {
    return (
        <div className="bg-white grow-1 p-5 w-full max-w-[1366px] mx-auto mt-3">
            <div className="flex">
                <p className="text-lg font-semibold ml-5">Inventory by brand</p>

                <div className="flex ml-auto gap-3">
                    <div className="bg-violet-100 py-1 px-5">
                        <p>Past 30 Days</p>
                    </div>
                    <div className="bg-violet-100 py-1 px-5">
                        <p>By Category</p>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <TableCustom dataTable={dataTable} />
            </div>

        </div>
    )
}

export default InventoryByBrand