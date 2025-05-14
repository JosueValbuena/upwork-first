import { SelectCustom } from "@/components/atoms";
import { InputTextLabel } from "@/components/molecules";
import { currencyList } from "@/utils/constants";

const GeneralSettingsRepricingApp = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-3">

            <p className="text-xl font-semibold">General Settings - Repricing App</p>

            <div className="w-full md:flex md:justify-between">
                <p className="text-md font-semibold lg:grow-1">Default Repricing Strategy fallback</p>

                <div className="md:w-[16rem]">
                    <SelectCustom
                        selectList={currencyList}
                    />
                </div>
            </div>

            <InputTextLabel
                id={'general-settings-repricing-app-2'}
                label={'Default Settings for w Listings'}
                placeHolder={'$'}
                type={'text'}
            />

            <InputTextLabel
                id={'general-settings-repricing-app-3'}
                label={'Min Price = (Your Price + Shipping)'}
                placeHolder={'$'}
                type={'text'}
            />

            <InputTextLabel
                id={'general-settings-repricing-app-7'}
                label={'Max Price = (Your Price + Shipping)'}
                placeHolder={'$'}
                type={'text'}
            />

            <InputTextLabel
                id={'general-settings-repricing-app-4'}
                label={'Cost = (Your Price + Shipping)'}
                placeHolder={'$'}
                type={'text'}
            />

            <InputTextLabel
                id={'general-settings-repricing-app-5'}
                label={'Default FBM Shipping Cost Defaults'}
                placeHolder={'$'}
                type={'text'}
            />

            <InputTextLabel
                id={'general-settings-repricing-app-6'}
                label={'Default FBM Additional Cost = $'}
                placeHolder={'$'}
                type={'text'}
            />

        </div>
    );
};

export default GeneralSettingsRepricingApp