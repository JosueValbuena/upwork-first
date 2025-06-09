import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface itemOption {
    label: string,
    value: string,
};

interface RadioGroupCustom {
    options: itemOption[]
}

const RadioGroupCustom = ({ options }: RadioGroupCustom) => {
    return (
        <div className="mt-3">
            <RadioGroup defaultValue={options[0].value}>
                {options.map(option => (
                    <div className="flex items-center space-x-2" key={option.value}>
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label className="text-foreground" htmlFor={option.value}>{option.label}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default RadioGroupCustom;