import { ActiveMarketplacesSection, CurrencyAndPriceSection, GeneralSettingsRepricingApp, GlobalSafeguardSection, InventoryAndCostIntegrationSection, SchedulingSecondSection, SchedulingSection, TimeZoneSection } from "@/components/organism"

const Settings = () => {
    return (
        <div className='max-w-[1366px] w-full mx-auto'>

            <h1 className='text-3xl font-semibold pt-3 pl-3 mb-3'>
                Settings
            </h1>

            <div className="lg:flex lg:w-full lg:gap-3">
                <div className="lg:w-1/3">
                    <ActiveMarketplacesSection />

                    <CurrencyAndPriceSection />

                    <InventoryAndCostIntegrationSection />

                    <TimeZoneSection />
                </div>

                <div className="lg:w-2/3">

                    <GlobalSafeguardSection />

                    <div className="lg:flex lg:gap-3 lg:w-full">
                        <div className="lg:w-full">
                            <SchedulingSection />
                        </div>

                        <div className="lg:w-full">
                            <SchedulingSecondSection />
                        </div>
                    </div>

                    <GeneralSettingsRepricingApp />

                </div>
            </div>
        </div>
    );
};

export default Settings;