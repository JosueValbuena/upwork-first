import { SelectCustom } from "@/components/atoms";
import type { SelectListItem } from "@/types";

const selectListBrand: SelectListItem[] = [
    {
        value: 'brand',
        label: 'Brand'
    }
];

const selectListCategory: SelectListItem[] = [
    {
        value: 'category',
        label: 'Category'
    }
];

const selectListMarketplace: SelectListItem[] = [
    {
        value: 'us',
        label: 'US'
    },
    {
        value: 'canada',
        label: 'Canada'
    },
    {
        value: 'mexico',
        label: 'Mexico'
    }
];

const FilterOptionsOne = () => {
    return (
        <>
            <p className="text-md font-semibold">Filter:</p>

            <SelectCustom id="brand" selectList={selectListBrand} customStyle={'w-[10rem] bg-white'} placeholder={'Brand'} />

            <SelectCustom id="category" selectList={selectListCategory} customStyle={'w-[10rem] bg-white'} placeholder={'Category'} />

            <SelectCustom id="marketplace" selectList={selectListMarketplace} customStyle={'w-[10rem] bg-white'} placeholder={'Marketplace'} />
        </>
    )
};

export default FilterOptionsOne;