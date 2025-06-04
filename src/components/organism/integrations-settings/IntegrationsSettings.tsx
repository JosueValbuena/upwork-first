import { SelectCustom } from "@/components/atoms"
import { SwitchLabel } from "@/components/molecules"
import { Button } from "@/components/ui/button"

const selectCustom = [
    { label: 'Inventory-Lab', value: 'Inventory-Lab' }
]

const IntegrationsSettings = () => {
    return (
        <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 h-full md:px-10'>
            <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">
                <h2 className="font-bold text-lg">3rd Party Integrations:</h2>

                <div className="flex gap-30">
                    <div className="w-[10rem]">
                        <SwitchLabel id={'inventory-lab'} label={'InventoryLab'} customizedLabel={false} switchFirst={true} />
                    </div>
                    <Button className="bg-primary-dark">Linked</Button>
                </div>

                <div className="flex gap-30">
                    <div className="w-[10rem]">
                        <SwitchLabel id={'Seller-Board'} label={'Seller-Board'} customizedLabel={false} switchFirst={true} />
                    </div>
                    <Button className="bg-primary-dark">Linked</Button>
                </div>

                <div className="flex gap-30">
                    <div className="w-[10rem]">
                        <SwitchLabel id={'Seller-Amp'} label={'Seller-Amp'} customizedLabel={false} switchFirst={true} />
                    </div>
                    <Button className="bg-primary-dark">Linked</Button>
                </div>

                <div className="flex items-center gap-5">
                    <p className="font-semibold text-sm">Which App to use to import Cost prices ?</p>

                    <SelectCustom selectList={selectCustom} customStyle="w-[13rem] bg-white" />
                </div>
            </div>
        </div>
    )
}

export default IntegrationsSettings