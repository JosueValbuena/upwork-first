import { Checkbox } from "@/components/ui/checkbox"

interface CheckBoxLabel {
    id: string,
    label: string,
    customizeStyles?: string
}

const CheckBoxLabel = ({ id, label, customizeStyles }: CheckBoxLabel) => {
    return (
        <div className={` ${customizeStyles ? customizeStyles : 'flex justify-between'}`}>
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