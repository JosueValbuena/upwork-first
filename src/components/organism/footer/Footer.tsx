import { Separator } from "@/components/ui/separator"
import { navigationLinks } from "@/utils/constants"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-white grow-1 p-5 w-full max-w-[1280px] mx-auto">
            <div className="flex gap-5 justify-center">
                {navigationLinks.map(navigationElement => (
                    <Link
                        key={navigationElement.label}
                        to={navigationElement.path}
                        className="text-gray-500 text-xs hover:text-gray-800 hover:font-semibold"
                    >
                        {navigationElement.label}
                    </Link>
                ))}
            </div>

            <Separator className="my-5" />

            <div className="flex justify-between">
                <p>© 2025. All rights reserved.</p>

                <div className="flex gap-6">
                    <p className="font-normal text-md">Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer