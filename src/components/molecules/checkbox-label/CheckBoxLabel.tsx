import { Checkbox } from "@/components/ui/checkbox"

interface CheckBoxLabel {
    id: string,
    label: string
}

const CheckBoxLabel = ({ id, label }: CheckBoxLabel) => {
    return (
        <div className="flex justify-between">
            <label
                htmlFor={id}
                className="text-md font-semibold"
            >
                {label}
            </label>

            <Checkbox
                id={id}
                className="data-[state=checked]:bg-violet-700 cursor-pointer w-7 h-7 rounded-lg"
            />
        </div>
    )
}

export default CheckBoxLabel