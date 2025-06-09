import { SelectCustom } from "@/components/atoms"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

interface SelectOption {
    value: string;
    label: string;
}

interface FormFieldSelect {
    id: string,
    form: any,
    selectList: SelectOption[],
    placeHolder?: string,
    customStyle?: string,
    labelCustomized?: string,
    label?: string
}

const FormFieldSelect = ({ id, form, selectList, placeHolder, customStyle, labelCustomized, label }: FormFieldSelect) => {
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
                        <SelectCustom
                            id={field.name}
                            selectList={selectList}
                            customStyle={customStyle}
                            placeholder={placeHolder}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        >
        </FormField>

    )
}

export default FormFieldSelect