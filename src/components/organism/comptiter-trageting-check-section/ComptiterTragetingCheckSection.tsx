import { CheckBoxLabel } from "@/components/molecules"

const ComptiterTragetingCheckSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-white mt-1">
            <p className="text-xl font-semibold">Comptiter Trageting</p>

            <CheckBoxLabel
                id="comptiter-trageting-1"
                label="Ignore sellers with feedback < X"
            />

            <CheckBoxLabel
                id="comptiter-trageting-2"
                label="Ignore FBM sellers"
            />

            <CheckBoxLabel
                id="comptiter-trageting-3"
                label="Ignore FBM sellers"
            />

            <CheckBoxLabel
                id="comptiter-trageting-4"
                label="Ignore Amazon Retail"
            />
        </div>
    )
}

export default ComptiterTragetingCheckSection