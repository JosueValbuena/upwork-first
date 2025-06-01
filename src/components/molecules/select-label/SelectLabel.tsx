import { SelectCustom } from '@/components/atoms'
import { Label } from '@/components/ui/label';

interface SelectLabel {
    label: string
};

const selectList = [
    {
        value: 'USD',
        label: 'USD'
    },
    {
        value: 'EUR',
        label: 'EUR'
    },
    {
        value: 'CAD',
        label: 'CAD'
    },
];

const SelectLabel = ({ label }: SelectLabel) => {
    return (
        <div>
            <Label
                className="text-md font-semibold mb-3"
            >
                {label}
            </Label>

            <SelectCustom
                selectList={selectList}
                customStyle={'bg-white w-xs'}
            />
        </div>
    )
}

export default SelectLabel