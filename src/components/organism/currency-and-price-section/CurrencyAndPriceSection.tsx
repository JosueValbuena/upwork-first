import { SelectCustom } from "@/components/atoms";

interface SelectOption {
  value: string;
  label: string;
}

const selectList: SelectOption[] = [
  { value: "USD", label: "USD - United States Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "GBP", label: "GBP - British Pound" },
  { value: "AUD", label: "AUD - Australian Dollar" },
  { value: "CAD", label: "CAD - Canadian Dollar" },
  { value: "INR", label: "INR - Indian Rupee" },
  { value: "JPY", label: "JPY - Japanese Yen" },
  { value: "CNY", label: "CNY - Chinese Yuan" },
  { value: "AED", label: "AED - UAE Dirham" },
  { value: "SAR", label: "SAR - Saudi Riyal" },
  { value: "TRY", label: "TRY - Turkish Lira" },
  { value: "ZAR", label: "ZAR - South African Rand" },
  { value: "CHF", label: "CHF - Swiss Franc" },
  { value: "KRW", label: "KRW - South Korean Won" },
];

const CurrencyAndPriceSection = () => {
  return (
    <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-3">
      <p className="text-xl font-semibold">Currency & Price</p>

      <SelectCustom selectList={selectList}/>

    </div>
  )
}

export default CurrencyAndPriceSection