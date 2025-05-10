import { ButtonLabel } from "@/components/molecules"

const InventoryAndCostIntegrationSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-3">
            <p className="text-xl font-semibold">Inventory & cost data integration</p>

            <ButtonLabel
                buttonText="Linked"
                label="InventoryLab"
            />
            <ButtonLabel
                buttonText="NotLinked"
                label="Seller Borad"
            />
        </div>
    )
}

export default InventoryAndCostIntegrationSection