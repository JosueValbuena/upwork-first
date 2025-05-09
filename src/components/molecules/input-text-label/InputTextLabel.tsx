import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputTextLabel {
    id: string,
    label: string,
    placeHolder: string,
    type: string
};

const InputTextLabel = ({ id, label, placeHolder, type }: InputTextLabel) => {

    const [inputValue, setInputValue] = useState('');

    //configure react hook form later with controller
    return (
        <div>
            <Label
                className="text-md font-semibold"
                htmlFor={id}
            >
                {label}
            </Label>

            <Input
                className="mt-1 bg-violet-100"
                type={type}
                id={id}
                placeholder={placeHolder}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </div>
    )
}

export default InputTextLabel