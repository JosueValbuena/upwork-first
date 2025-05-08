import { IconInfopOutlinedPurple } from "@/utils/icons"

const CardRiskAssessments = () => {
  return (
    <div className="flex flex-col bg-violet-100 justify-center items-center py-3 px-6 rounded-xl ">
      <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
        <p>I</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-xl font-semibold">999</p>
        <div className="flex">
          <p className="text-sm font-medium">Text card/example</p>
          <IconInfopOutlinedPurple className="ml-1"/>
        </div>
      </div>
    </div>
  )
}

export default CardRiskAssessments