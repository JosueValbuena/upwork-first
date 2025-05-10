import { InventoryStrategySection } from '@/components/molecules'
import { AccountSettingsSection, AdvancedSettingsSection, BillingAndPlanSection, ComptiterTragetingCheckSection, ComptiterTragetingSection, NotificationSection, RepricingRulesSection, UserManagementSection } from '@/components/organism'

const AccountSettings = () => {
    return (
        <div className='max-w-[1366px] w-full mx-auto'>
            <h1 className='text-3xl font-semibold pt-3 pl-3 mb-3'>
                Account Settings
            </h1>

            <div className='md:flex md:gap-3'>
                <div className='w-full'>
                    <AccountSettingsSection />

                    <InventoryStrategySection />

                    <ComptiterTragetingSection />

                    <BillingAndPlanSection />

                    <UserManagementSection />
                </div>

                <div className='w-full'>
                    <RepricingRulesSection />

                    <ComptiterTragetingCheckSection />

                    <NotificationSection />

                    <AdvancedSettingsSection />
                </div>
            </div>
        </div>
    )
}

export default AccountSettings