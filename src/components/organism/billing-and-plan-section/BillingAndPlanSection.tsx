import { ButtonLabel } from "@/components/molecules"

const BillingAndPlanSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-1">
            <p className="text-xl font-semibold">Billing & Plan</p>

            <ButtonLabel
                buttonText="Change"
                label="Current Plan"
            />

            <ButtonLabel
                buttonText="Change"
                label="SKU Usage/Limit"
            />

            <ButtonLabel
                buttonText="Change"
                label="Next Billing Date"
            />
        </div>
    )
}

export default BillingAndPlanSection