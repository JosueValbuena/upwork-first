import type { RiskItem } from "@/types"
import { IconInfopOutlinedPurple } from "@/utils/icons"

interface CardRiskAssessments {
  riskData: RiskItem
};

const CardRiskAssessments = ({ riskData }: CardRiskAssessments) => {
  return (
    <div className="
    flex flex-col bg-primary-light 
    justify-center items-center py-3 px-2 
    rounded-xl w-full max-w-[16rem] lg:w-full lg:max-w-[10rem] xl:max-w[12rem]
    mx-auto">
      {/*  md:max-w-3xs lg:max-w-[11.25rem] w-full max-w-[9.65rem]*/}
      <div className="w-9 h-9 bg-white rounded-full flex justify-center items-center">
        {riskData.icon}
      </div>

      <div className="flex flex-col justify-center items-center mt-1">

        <div className="flex">
          <p className="text-xl font-semibold">{riskData.value}</p>
          {riskData.state[0].icon}
        </div>

        <div className="flex justify-center">
          <p className="text-xs font-medium">{riskData.label}</p>
          <IconInfopOutlinedPurple className="ml-1" />
        </div>

      </div>
    </div>
  )
}

export default CardRiskAssessments