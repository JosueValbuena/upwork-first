import type { AnalyticsItem } from "@/types/utils";
import { useNavigate } from "react-router-dom";

interface AnalyticsOptionCard {
    data: AnalyticsItem
};

const AnalyticsOptionCard = ({ data }: AnalyticsOptionCard) => {

    const navigate = useNavigate();

    const handleNavigate = (url: string) => {
        navigate(url);
    };

    return (
        <div className="
        border-2 border-solid border-[#F1EFFC] rounded-2xl 
        p-4 flex flex-col gap-3 bg-background-secondary-customized
        cursor-pointer hover:border-primary-dark 
        "
            onClick={() => handleNavigate(data.to)}
        >
            <div className="flex gap-3">
                <div className="bg-primary-light size-10 flex justify-center items-center rounded-lg">{data.icon}</div>
                <h3>{data.title}</h3>
            </div>

            <p>{data.text}</p>
        </div>
    );
};

export default AnalyticsOptionCard;