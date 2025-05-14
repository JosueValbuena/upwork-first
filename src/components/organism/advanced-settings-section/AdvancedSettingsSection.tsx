import { SwitchLabel } from "@/components/molecules"

const AdvancedSettingsSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 background-secondary-customizedwhite mt-1">
            <p className="text-xl font-semibold">Advanced Settings</p>

            <SwitchLabel
                id="advanced-settings-1"
                label="Enable AI-Driven Repricing"
            />

            <SwitchLabel
                id="dvanced-settings-2"
                label="Enable AI-Driven Repricing"
            />
        </div>
    )
}

export default AdvancedSettingsSection