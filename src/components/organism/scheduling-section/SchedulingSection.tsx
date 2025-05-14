import { CheckBoxLabel, InputTextLabel, SwitchLabel } from "@/components/molecules";

const SchedulingSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-3">

            <p className="text-xl font-semibold">Scheduling</p>

            <SwitchLabel
                id={'quiet-alert'}
                label={'Quiet Alert'}
            />

            <CheckBoxLabel
                id={'scheduling-section-1'}
                label={'Min/Max price Missing'}
            />

            <CheckBoxLabel
                id={'scheduling-section-2'}
                label={'Price Below cost'}
            />

            <CheckBoxLabel
                id={'scheduling-section-3'}
                label={'SKU without assigned Stretgy'}
            />

            <InputTextLabel
                id={'scheduling-section-4'}
                label={'Alert reciplent'}
                placeHolder={'Email address'}
                type={'text'}
            />

        </div>
    );
};

export default SchedulingSection;