import { SelectCustom } from "@/components/atoms"
import { InputTextLabel, SwitchLabel } from "@/components/molecules"
import { currencyList } from "@/utils/constants"

const GlobalSafeguardSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-3">
            <p className="text-xl font-semibold">Global Safeguard</p>

            <div className="flex flex-col gap-3">
                <div className="lg:flex gap-3 items-center">
                    <div className="lg:grow-1">
                        <SwitchLabel
                            id="global-safeguard-section-1"
                            label="Global Pause"
                        />
                    </div>

                    <div className="lg:grow-1">
                        <SelectCustom
                            selectList={currencyList}
                        />
                    </div>
                </div>

                <InputTextLabel
                    id={'min-profit-protection'}
                    label={'Minimum Profit Protection'}
                    placeHolder={'Write amount'}
                    type={'text'}
                />
            </div>

        </div>
    )
}

export default GlobalSafeguardSection