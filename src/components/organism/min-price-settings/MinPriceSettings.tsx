import { InputCustom, SelectCustom } from "@/components/atoms"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { IconPlusOutlinedWhite, IconTrashNormal } from "@/utils/icons"

const selectDetault = {
    brandName: [
        {
            value: 'Brand Name',
            label: 'Brand Name'
        }
    ],
    isGreaterThan: [
        {
            value: 'Is Greater Than',
            label: 'Is Greater Than'
        }
    ],
    and: [
        {
            value: '&',
            label: '&'
        }
    ],
    pricePlusShipping: [
        {
            value: 'Your  Price + Shipping',
            label: 'Your  Price + Shipping'
        }
    ],
    plus: [
        {
            value: '+',
            label: '+'
        }
    ],
    minus: [
        {
            value: '-',
            label: '-'
        }
    ],
    percentage: [
        {
            value: '%',
            label: '%'
        }
    ],
}

const MinPriceSettings = () => {
    return (
        <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 md:px-10'>
            <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">

                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="font-bold text-md">Default Min Price Settings</h2>
                        <p className="text-sm">When new SKU’s are added, assign a Minimum Price based on the following priority rules:</p>
                    </div>

                    <Button className="bg-primary-dark font-semibold">
                        <IconPlusOutlinedWhite />
                        Add New Rule
                    </Button>
                </div>

                <div className="md:flex gap-5 items-baseline">
                    <Switch className="data-[state=checked]:bg-primary-dark cursor-pointer" />

                    <div className="flex flex-col gap-5">

                        <div className="md:flex items-center gap-5">
                            <p className="font-bold text-sm">If</p>

                            <SelectCustom selectList={selectDetault.brandName} customStyle={'bg-white w-[13rem]'} />

                            <SelectCustom selectList={selectDetault.isGreaterThan} customStyle={'bg-white'} />

                            <InputCustom id={'rule-1'} name={'rule-1'} placeHolder="$" type={'text'} customizedInput={'bg-white w-[5rem]'} />

                        </div>

                        <div className="md:flex justify-center">
                            <SelectCustom selectList={selectDetault.and} customStyle={'bg-white'} />
                        </div>

                        <div className="md:flex items-center gap-5">
                            <p className="font-bold text-sm">If</p>

                            <SelectCustom selectList={selectDetault.brandName} customStyle={'bg-white w-[13rem]'} />

                            <SelectCustom selectList={selectDetault.isGreaterThan} customStyle={'bg-white'} />

                            <InputCustom id={'rule-1'} name={'rule-1'} placeHolder="$" type={'text'} customizedInput={'bg-white w-[5rem]'} />

                            <p className="font-bold text-sm">&</p>

                            <InputCustom id={'rule-1'} name={'rule-1'} placeHolder="$" type={'text'} customizedInput={'bg-white w-[5rem]'} />

                            <div className="flex items-center gap-3 cursor-pointer md:ml-5">
                                <p className="font-semibold text-sm">+  Add &/Or Rule</p>

                                <IconTrashNormal />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="">
                    <p className="font-bold text-md md:pl-66">Perform the Following</p>

                    <div className="md:flex items-center gap-28 mt-3 md:ml-30">
                        <p className="font-bold text-sm">Set Min Price based on</p>
                        <SelectCustom selectList={selectDetault.pricePlusShipping} customStyle={'bg-white w-[14rem]'} />
                    </div>

                    <div className="md:flex items-center gap-10 mt-3 md:ml-30">
                        <p className="font-bold text-sm">Min Price = Your Price + Shipping</p>
                        <div className="flex items-center gap-3">
                            <SelectCustom selectList={selectDetault.plus} customStyle={'bg-white'} />
                            <InputCustom id={'rule-1'} name={'rule-1'} placeHolder="00" type={'text'} customizedInput={'bg-white w-[5rem]'} />
                            <SelectCustom selectList={selectDetault.percentage} customStyle={'bg-white'} />
                        </div>
                    </div>
                </div>

                <Separator />

                <div>
                    <p className="font-bold text-md">Multiple Based Rules</p>
                    <p className="text-sm">Applies this Min Price only if at least 2 of the above rule’s are found true.</p>

                    <div className="md:flex items-center gap-28 mt-3 md:ml-30">
                        <p className="font-bold text-sm">Set Max Price based on</p>
                        <SelectCustom selectList={selectDetault.pricePlusShipping} customStyle={'bg-white w-[14rem]'} />
                    </div>

                    <div className="md:flex items-center gap-10 mt-3 md:ml-30">
                        <p className="font-bold text-sm">Min Price = Your Price + Shipping</p>
                        <div className="flex items-center gap-3">
                            <SelectCustom selectList={selectDetault.minus} customStyle={'bg-white'} />
                            <InputCustom id={'rule-1'} name={'rule-1'} placeHolder="00" type={'text'} customizedInput={'bg-white w-[5rem]'} />
                            <SelectCustom selectList={selectDetault.percentage} customStyle={'bg-white'} />
                        </div>
                    </div>
                </div>

                <Separator />

                <div>
                    <p className="font-bold text-md">Default Min Price (Fallback)</p>
                    <p className="text-sm">Applies only if none of the above rule’s are found true.</p>

                    <div className="md:flex items-center gap-28 mt-3 md:ml-30">
                        <p className="font-bold text-sm">Set Min Price based on</p>
                        <SelectCustom selectList={selectDetault.pricePlusShipping} customStyle={'bg-white w-[14rem]'} />
                    </div>

                    <div className="md:flex items-center gap-10 mt-3 md:ml-30">
                        <p className="font-bold text-sm">Min Price = Your Price + Shipping</p>
                        <div className="flex items-center gap-3">
                            <SelectCustom selectList={selectDetault.minus} customStyle={'bg-white'} />
                            <InputCustom id={'rule-1'} name={'rule-1'} placeHolder="00" type={'text'} customizedInput={'bg-white w-[5rem]'} />
                            <SelectCustom selectList={selectDetault.percentage} customStyle={'bg-white'} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MinPriceSettings