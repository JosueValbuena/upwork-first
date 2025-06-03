import { Input } from "@/components/ui/input"

interface InputTextCustom {
    id: string,
    name: string,
    value?: string,
    onChange?: any,
    placeHolder?: string,
    type: string,
    customizedInput?: string,
};

const InputCustom = ({ id, name, value, onChange, placeHolder, type, customizedInput }: InputTextCustom) => {

    return (
        <Input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeHolder}
            className={customizedInput ? customizedInput : "mt-1 bg-primary-light md:max-w-3xs"}
        />
    )
}

export default InputCustom