import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface SwitchLabel {
    id: string,
    label: string,
    customizedLabel?: string,
    switchFirst?: boolean
};

const SwitchLabel = ({ id, label, customizedLabel, switchFirst }: SwitchLabel) => {
    
    return (
        <div className={`flex items-center justify-between mt-1 ${switchFirst ? 'flex-row-reverse' : ''}`}>
            <Label
                className={customizedLabel ? customizedLabel : "text-md font-semibold"}
                htmlFor={id}
            >
                {label}
            </Label>
            <Switch
                className="data-[state=checked]:bg-violet-700 cursor-pointer"
                id={id}
            />
        </div>

    )
}

export default SwitchLabel