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
  selectList?: SelectOption[],
  customStyle?: string
  placeholder?:string,
}

const SelectCustom = ({ selectList, customStyle, placeholder }: SelectList) => {
  return (
    <Select defaultValue={selectList && selectList[0].value}>
      <SelectTrigger className={customStyle ? customStyle : `w-full bg-primary-light font-semibold`}>
        <SelectValue placeholder={placeholder} />
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