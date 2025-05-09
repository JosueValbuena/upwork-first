import { InventoryStrategySection } from '@/components/molecules'
import { AccountSettingsSection, BillingAndPlanSection, ComptiterTragetingSection, UserManagementSection } from '@/components/organism'

const AccountSettings = () => {
    return (
        <div className='max-w-[1280px]'>
            <h1 className='text-3xl font-semibold pt-3 pl-3 mb-3'>
                Account Settings
            </h1>

            <AccountSettingsSection />

            <InventoryStrategySection />

            <ComptiterTragetingSection />

            <BillingAndPlanSection />

            <UserManagementSection />
        </div>
    )
}

export default AccountSettings