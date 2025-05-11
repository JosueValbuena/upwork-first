import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectList {
  selectList: SelectOption[]
}

const SelectCustom = ({ selectList }: SelectList) => {
  return (
    <Select defaultValue={selectList[0].value}>
      <SelectTrigger className="w-full bg-primary-light font-semibold">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {selectList?.map((element: SelectOption) => (
          <SelectItem
            key={element.value}
            value={element.value}
          >
            {element.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectCustom