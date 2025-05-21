import { FormControl/* , FormDescription */, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import InputPasswordCustom from "../input-password-custom/InputPasswordCustom"

interface FormFieldInput {
    form: any,
    id: string,
    placeHolder: string,
    customizedInput?: string,
    label?: any
}

const FormFieldInputPassword = ({ form, id, placeHolder, customizedInput, label }: FormFieldInput) => {
    return (
        <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
                <FormItem>
                    {console.log({ field })}
                    {label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <FormControl>
                        <InputPasswordCustom
                            id={field.name}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            placeHolder={placeHolder}
                            customizedInput={customizedInput}
                        />
                    </FormControl>
                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormFieldInputPassword