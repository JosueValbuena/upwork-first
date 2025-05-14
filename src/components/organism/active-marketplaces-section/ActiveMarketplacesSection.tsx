import { Button } from "@/components/ui/button"

const ActiveMarketplacesSection = () => {
    return (
        <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-3">
            <p className="text-xl font-semibold">Active Marketplaces</p>

            <div className="flex gap-1">
                <Button className="bg-primary-light text-foreground font-semibold text-md hover:text-white">
                    UK
                </Button>

                <Button className="bg-primary-light text-foreground font-semibold text-md hover:text-white">
                    US
                </Button>

                <Button className="bg-primary-light text-foreground font-semibold text-md hover:text-white">
                    DE
                </Button>

                <Button className="bg-primary-light text-foreground font-semibold text-md hover:text-white">
                    CA
                </Button>
            </div>

        </div>
    )
}

export default ActiveMarketplacesSection