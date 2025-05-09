import SwitchLabel from "../switch-label/SwithLabel";

const InventoryStrategySection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-1">
            <p className="text-xl font-semibold">Inventory Strategy</p>

            <SwitchLabel
                id={'InventoryStrategySection-first-switch'}
                label={'Auto-disable repricing when out-stock'}
            />

            <SwitchLabel
                id={'InventoryStrategySection-second-switch'}
                label={'Auto-enable repricisig for new SKUs'}
            />
        </div>
    )
}

export default InventoryStrategySection;