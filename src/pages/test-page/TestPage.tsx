import { Separator } from "@/components/ui/separator"
import img from '@/assets/img/41h-WUpm6DL.jpg';

const TestPage = ({ }) => {
    return (
        <>
            {/* Create a new componente called with this data and handle display by mediaquery. 
example, current componente xs:hidden md:block and this componente xs:block md:hidden */}
            <div className="flex flex-col max-w-full px-2">
                <div className="flex flex-col px-2">
                    <p className="font-semibold">FNSKU</p>
                    <p>B0CFP7W7SS</p>
                    <Separator />
                </div>

                <div className="flex flex-col px-2">
                    <p className="font-semibold">Image</p>
                    <img src={img} alt="img-1" className="aspect-[1/1] w-[10rem]" />
                    <Separator />
                </div>

                <div className="flex flex-col px-2">
                    <p className="font-semibold">SKU</p>
                    <p>1012B357.702-7</p>
                    <Separator />
                </div>

                <div className="flex flex-col px-2">
                    <p className="font-semibold">ASIN</p>
                    <p>B0CFP7W7SS</p>
                    <Separator />
                </div>

                <div className="flex flex-col px-2">
                    <p className="font-semibold">Title</p>
                    <p>ASICS Women's Gel-Kayano 30 Running Shoes, 7, Cosmos/ASH Rock</p>
                    <Separator />
                </div>

                <div className="flex flex-col px-2">
                    <p className="font-semibold"> Labels</p>
                    <p>B0CFP7W7SS</p>
                    <Separator />
                </div>
            </div>

            {/* Create a new componente called CardRisk Assesments Loader and add it this instead of 'Loading risk data...' */}
            <div className="flex flex-row justify-between gap-y-3 gap-x-0 flex-wrap mt-1">
                <div className="
    flex flex-col justify-center items-center
    py-3 px-2 w-[10rem] mx-auto animate-pulse 
    rounded-md bg-gray-200 dark:bg-gray-700
    h-[7rem] md:w-[12.1rem]">

                </div>

                <div className="
    flex flex-col justify-center items-center
    py-3 px-2 w-[10rem] mx-auto animate-pulse 
    rounded-md bg-gray-200 dark:bg-gray-700
    h-[7rem] md:w-[12.1rem]">

                </div>

                <div className="
    flex flex-col justify-center items-center
    py-3 px-2 w-[10rem] mx-auto animate-pulse 
    rounded-md bg-gray-200 dark:bg-gray-700
    h-[7rem] md:w-[12.1rem]">
                </div>
            </div>

            {/* Filters dropdow issue: i cant find the componente and runt propertly the app, but just go to the 
            filter component and i must be a function that active dropdown, the function maybe be callend on a 
            span or p (text tag), just grab it and put into the parents div 
            somethis like:
            current
            <div>
                <p onClick={() => activeDropdan}>Brands<p/>
            </div>

            change to:

            <div onClick={() => activeDropdan}>
                <p>Brands<p/>
            </div>
            */}
        </>
    )
}

export default TestPage