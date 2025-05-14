import { CheckBoxLabel } from "@/components/molecules"

const NotificationSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-1">
            <p className="text-xl font-semibold">Notification</p>

            <CheckBoxLabel
                id="notification-trageting-1"
                label="Notify when SKU below m price"
            />

            <CheckBoxLabel
                id="notification-trageting-2"
                label="Notify when no competition found"
            />

            <CheckBoxLabel
                id="notification-trageting-3"
                label="Notify when API error / failed repricing"
            />

            <CheckBoxLabel
                id="notification-trageting-4"
                label="Notify if SKU Inactive >40 hrs"
            />

            <CheckBoxLabel
                id="notification-trageting-5"
                label="Daily Summary Email"
            />

            <CheckBoxLabel
                id="notification-trageting-6"
                label="Weekly Performance Report"
            />
        </div>
    )
};

export default NotificationSection