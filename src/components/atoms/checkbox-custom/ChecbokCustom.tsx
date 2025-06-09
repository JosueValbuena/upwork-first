import { Checkbox } from "@/components/ui/checkbox"

interface CheckBoxCustom {
    id?: string,
    checked: any,
    onCheckedChange: any
};

const ChecbokCustom = ({ id, checked, onCheckedChange }: CheckBoxCustom) => {



    return (
        <Checkbox
            id={id}
            checked={checked}
            className="data-[state=checked]:bg-violet-700 cursor-pointer w-5 h-5"
            /* onChange={onChecked} */
            onCheckedChange={onCheckedChange}
        />
    )
}

export default ChecbokCustom