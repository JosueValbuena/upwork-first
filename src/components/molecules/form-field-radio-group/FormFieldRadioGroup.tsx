import { RadioGroupCustom } from '@/components/atoms'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

interface itemOption {
    label: string,
    value: string,
};

interface FormFieldRadioGroup {
    id: string,
    form: any,
    options: itemOption[]
    stylesCustomized?: string,
    labelCustomized?: string,
    label?: string
};

const FormFieldRadioGroup = ({ id, form, label, labelCustomized, /* stylesCustomized ,*/ options }: FormFieldRadioGroup) => {
    return (
        <FormField
            control={form.control}
            name={id}
            render={({ /* field */ }) => (
                <FormItem>
                    {label && (<FormLabel className={labelCustomized ? labelCustomized : ''}>{label}</FormLabel>)}
                    <FormControl>
                        <RadioGroupCustom
                            options={options}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        >
        </FormField>
    )
}

export default FormFieldRadioGroup