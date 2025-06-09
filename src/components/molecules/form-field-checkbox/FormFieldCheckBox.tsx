import { ChecbokCustom } from "@/components/atoms";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface FormFieldCheckbox {
    form: any,
    id: string;
    label?: string;
    labelCustomized?: string;
}

const FormFieldCheckbox = ({ id, form, label, labelCustomized }: FormFieldCheckbox) => {
    return (
        <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div className="flex flex-row-reverse justify-end gap-3 items-end">
                            {label && (<FormLabel className={labelCustomized}>{label}</FormLabel>)}
                            <ChecbokCustom
                                id={id}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormFieldCheckbox;