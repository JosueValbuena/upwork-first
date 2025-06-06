import { InputCustom } from "@/components/atoms"
import { FormControl/* , FormDescription */, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

interface FormFieldInput {
    form: any,
    id: string,
    placeHolder: string,
    customizedInput?: string,
    label?: any,
    labelCustomized?: string,
}

const FormFieldInputText = ({ form, id, placeHolder, customizedInput, label, labelCustomized }: FormFieldInput) => {
    return (
        <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
                <FormItem>
                    {label && (
                        <FormLabel className={labelCustomized ? labelCustomized : ''}>{label}</FormLabel>
                    )}
                    <FormControl>
                        {/* <Input
                            placeholder={placeHolder}
                            {...field}
                            className="bg-white py-7 mt-5"
                        /> */}
                        <InputCustom
                            id={field.name}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            placeHolder={placeHolder}
                            type={'text'}
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

export default FormFieldInputText