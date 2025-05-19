import { useState } from "react";
import TableCustom from "../table-custom/TableCustom"
import { Button } from "@/components/ui/button";
import { IconArrowDownBlack } from "@/utils/icons";
import { useAppSelector } from "@/store/hooks";

const dataTable = [
    {
        brand_name: "name a",
        units_in_stock: 125,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name b",
        units_in_stock: 20,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name c",
        units_in_stock: 10,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name e",
        units_in_stock: 130,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name f",
        units_in_stock: 1120,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name g",
        units_in_stock: 190,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name g",
        units_in_stock: 200,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name i",
        units_in_stock: 210,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name j",
        units_in_stock: 290,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name k",
        units_in_stock: 300,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name l",
        units_in_stock: 320,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name m",
        units_in_stock: 220,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name o",
        units_in_stock: 550,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name p",
        units_in_stock: 730,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
    {
        brand_name: "name q",
        units_in_stock: 360,
        current_inventory_cost: "$1,000",
        current_retail_value: "$1,500",
        potential_profit_to_generate: "500",
        potential_sales_margin: "33%",
        unit_sold: "30 units",
        potential_ROI: "50%",
    },
]

const InventoryByBrand = () => {

    const [tableResults, setTableResults] = useState(5);
    const { value: isSortMode } = useAppSelector(state => state.sortMode);

    const resultsToShow = dataTable.slice(0, tableResults) ?? [];

    const onLoadingData = () => {
        setTableResults(prevValue => prevValue + 5)
    };

    const onResetData = () => {
        setTableResults(5)
    };

    return (
        <div className={
            `bg-background-secondary-customized grow-1 p-5 w-full max-w-[1366px] mx-auto mt-3
            ${isSortMode ? 'cursor-grab' : ''}
            `}
        >
            <div className="flex">
                <p className="text-lg font-semibold ml-5">Inventory by brand</p>

                <div className="flex ml-auto gap-3">
                    <div className="bg-primary-light py-1 px-5 flex items-center">
                        <p>Past 30 Days</p>
                        <IconArrowDownBlack className="ml-2 cursor-pointer" />
                    </div>
                    <div className="bg-primary-light py-1 px-5 flex items-center">
                        <p>By Category</p>
                        <IconArrowDownBlack className="ml-2 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="mt-3 flex flex-col">
                <TableCustom dataTable={resultsToShow} />
                <Button
                    className="mt-3 bg-primary-light text-foreground mx-auto hover:text-white "
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={onLoadingData}
                >
                    Load More
                </Button>
                {resultsToShow.length > 5 && (
                    <Button
                        className="mt-3 bg-primary-light text-foreground mx-auto hover:text-white "
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={onResetData}
                    >
                        Reset
                    </Button>
                )}
            </div>

        </div>
    )
}

export default InventoryByBrand