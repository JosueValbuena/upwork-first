import type { RiskItem } from "@/types"
import { IconInfopOutlinedPurple } from "@/utils/icons"

interface CardRiskAssessments {
  riskData: RiskItem
};

const CardRiskAssessments = ({ riskData }: CardRiskAssessments) => {
  return (
    <div className="
    flex flex-col bg-violet-100 
    justify-center items-center py-3 px-5 
    rounded-xl w-full max-w-[13rem] md:max-w-3xs lg:max-w-[11.25rem]
    mx-auto">
      <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <p>{riskData.icon}</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">

        <div className="flex">
          <p className="text-xl font-semibold">{riskData.value}</p>
          {riskData.state[0].icon}
        </div>

        <div className="flex">
          <p className="text-sm font-medium">{riskData.label}</p>
          <IconInfopOutlinedPurple className="ml-1" />
        </div>

      </div>
    </div>
  )
}

export default CardRiskAssessments