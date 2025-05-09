import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ButtonLabel {
    buttonText: string,
    label: string,
};

const ButtonLabel = ({ buttonText, label }: ButtonLabel) => {
    return (
        <div className="flex items-center justify-between mt-1">
            <Label
                className="text-md font-semibold"
            >
                {label}
            </Label>

            <Button
                className="bg-violet-700 font-semibold px-8 hover:bg-violet-950 cursor-pointer"
            >
                {buttonText}
            </Button>
        </div>
    )
}

export default ButtonLabel