import { Checkbox } from "@/components/ui/checkbox"

interface CheckBoxCustom {
    onChecked: any
}

const ChecbokCustom = ({ onChecked }: CheckBoxCustom) => {

    

    return (
        <Checkbox
            className="data-[state=checked]:bg-violet-700 cursor-pointer w-5 h-5"
            onChange={onChecked}
            onCheckedChange={onChecked}
        />
    )
}

export default ChecbokCustom