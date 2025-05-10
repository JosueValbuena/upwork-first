import { SelectCustom } from "@/components/atoms";

interface SelectOption {
    value: string;
    label: string;
}

const selectList: SelectOption[] = [
    { value: "Lodon", label: "London" },
    { value: "New York", label: "New York" },
    { value: "Paris", label: "Paris" },
    { value: "Rome", label: "Rome" },
    { value: "Lisboa", label: "Lisboa" },
];

const TimeZoneSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-3">
            <p className="text-xl font-semibold">Timezone</p>

            <SelectCustom selectList={selectList} />
        </div>
    )
};

export default TimeZoneSection;