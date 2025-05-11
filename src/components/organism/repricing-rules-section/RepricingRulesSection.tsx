import { InputTextLabel } from "@/components/molecules"
import { Button } from "@/components/ui/button"

const RepricingRulesSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-1">

            <p className="text-xl font-semibold">Repricing Rules</p>

            <InputTextLabel
                id={'rule-name'}
                label={'Rule Name:'}
                placeHolder={'Rule name'}
                type={'text'}
            />

            <InputTextLabel
                id={'min-rol-or-profit'}
                label={'Min Roi or Profit'}
                placeHolder={'Mg'}
                type={'text'}
            />

            <InputTextLabel
                id={'max-price-celling'}
                label={'Max Price Celling'}
                placeHolder={'Max'}
                type={'text'}
            />

            <InputTextLabel
                id={'reprice-frequency'}
                label={'Reprice Frequency'}
                placeHolder={'Automatic'}
                type={'text'}
            />

            <div className="flex justify-between items-center">
                <p className="text-md font-semibold">Create new rule</p>
                <div>
                    <Button className="bg-primary-light text-black px-7 font-bold mr-3 hover:bg-violet-400">Add</Button>
                    <Button className="bg-violet-700 font-bold px-7 hover:bg-violet-400">Delete</Button>
                </div>
            </div>

        </div>
    )
}

export default RepricingRulesSection