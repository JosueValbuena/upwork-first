import {
    ActiveMarketplacesSection, DefaultStrategySettings, GlobalSettings, IntegrationsSettings, MaxPriceSettings, MinPriceSettings, NotificationSettings,/* , CurrencyAndPriceSection, GeneralSettingsRepricingApp, GlobalSafeguardSection, InventoryAndCostIntegrationSection, SchedulingSecondSection, SchedulingSection,  TimeZoneSection*/
    UserProfileSettings
} from "@/components/organism"
import { Button } from "@/components/ui/button";
import { useState } from "react";

const buttonsTab = [
    {
        label: 'Marketplaces'
    },
    {
        label: 'User Profile'
    },
    {
        label: 'Integrations'
    },
    {
        label: 'Global Settings'
    },
    {
        label: 'Notifications'
    },
    {
        label: 'General Settings'
    },
    {
        label: 'Manage Users'
    },
    {
        label: 'Suscriptions'
    }
];

const globalSettingsOptions = [
    {
        label: 'Min Price Settings'
    },
    {
        label: 'Max Price Settings'
    },
    {
        label: 'Strategy Price Settings'
    },
]

const Settings = () => {

    const [activeTab, setActiveTab] = useState('Marketplaces');
    const [activeGeneralSettionsTab, setActiveGeneralSettionsTab] = useState('Min Price Settings');

    const onChangeTab = (label: string): void => {
        setActiveTab(label);
    };

    const onGeneralSettingsTab = (label: string): void => {
        setActiveGeneralSettionsTab(label);
    };

    return (
        <div>

            <div className='max-w-[1366px] w-full mx-auto'>

                <div className="flex items-center justify-between pt-3 mx-10 mb-3">
                    <h1 className='text-3xl font-semibold'>
                        Settings
                    </h1>

                    <Button className="font-bold text-md bg-primary-dark">
                        Save
                    </Button>
                </div>

                <div className="flex justify-between flex-wrap gap-y-3 gap-x-5 mx-10">
                    {buttonsTab.map(element => (
                        <Button
                            key={element.label}
                            className={`text-md font-bold bg-primary-light text-foreground hover:bg-primary-dark
                            ${activeTab === element.label ? 'bg-primary-dark text-white' : ''}
                            `}
                            onClick={() => onChangeTab(element.label)}
                        >
                            {element.label}
                        </Button>
                    ))}
                </div>

                {activeTab === 'General Settings' && (
                    <div className="flex justify-start flex-wrap gap-y-3 gap-x-5 mt-3 mx-10">
                        {globalSettingsOptions.map(element => (
                            <Button
                                key={element.label}
                                className={`text-md font-bold bg-primary-light text-foreground hover:bg-primary-dark
                        ${activeGeneralSettionsTab === element.label ? 'bg-primary-dark text-white' : ''}
                        `}
                                onClick={() => onGeneralSettingsTab(element.label)}
                            >
                                {element.label}
                            </Button>
                        ))}
                    </div>
                )}

            </div>

            {activeTab === 'Marketplaces' && (
                <ActiveMarketplacesSection />
            )}

            {activeTab === 'User Profile' && (
                <UserProfileSettings />
            )}

            {activeTab === 'Integrations' && (
                <IntegrationsSettings />
            )}

            {activeTab === 'Global Settings' && (
                <GlobalSettings />
            )}

            {activeTab === 'Notifications' && (
                <NotificationSettings />
            )}

            {activeTab === 'General Settings' && (
                <>
                    {activeGeneralSettionsTab === 'Min Price Settings' && (
                        <MinPriceSettings />
                    )}

                    {activeGeneralSettionsTab === 'Max Price Settings' && (
                        <MaxPriceSettings />
                    )}

                    {activeGeneralSettionsTab === 'Strategy Price Settings' && (
                        <DefaultStrategySettings />
                    )}
                </>
            )}

            {/* <div className="lg:flex lg:w-full lg:gap-3">
                <div className="lg:w-1/3">

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
            </div> */}
        </div>
    );
};

export default Settings;