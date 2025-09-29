import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table"

export const financialSections = [
    {
        title: "Income Section",
        rows: ["Gross Sales", "Refunds/Returns", "Net Sales", "Other Income"],
    },
    {
        title: "Cost of Goods Sold",
        rows: ["COGS", "Gross Profit"],
    },
    {
        title: "Expenses Section",
        rows: [
            "FBA Fulfillment Fees",
            "Referral Fees",
            "Storage Fees",
            "Shipping Cost",
            "Advertising Cost",
            "Other Amazon Fee",
            "Miscellaneous Expenses",
        ],
    },
    {
        title: "Summary",
        rows: [
            "Total Expense",
            "Operating Profit",
            "Net profit"
        ],
    },
]

export const weekHeaders = ["Week 1", "Week 2", "Week 3", "Week 4", "Total"]

const AnalitycsProfitAndLossStatementforGivenDateRange = () => {

    interface FinancialRowGroupProps {
        title: string
        rows: string[]
        weeks: string[]
        evenColor?: string
        oddColor?: string
    }

    const FinancialRowGroup: React.FC<FinancialRowGroupProps> = ({
        title,
        rows,
        weeks,
        evenColor = "bg-primary-light",
        oddColor = "bg-primary-xlight",
    }) => {
        return (
            <>
                {/* Section Header */}
                <TableRow className="bg-white">
                    <TableCell colSpan={weeks.length + 1} className="font-bold">
                        {title}
                    </TableCell>
                </TableRow>

                {/* Section Rows */}
                {rows.map((rowLabel, idx) => (
                    <TableRow
                        key={rowLabel}
                        className={idx % 2 === 0 ? evenColor : oddColor}
                    >
                        <TableCell>{rowLabel}</TableCell>
                        {weeks.map((_, weekIdx) => (
                            <TableCell key={weekIdx} className="text-center">
                                -
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </>
        )
    }


    return (
        <div className="overflow-x-auto">
            <Table className="min-w-full border border-gray-200">
                <TableHeader>
                    <TableRow className="bg-white">
                        <TableHead></TableHead>
                        {weekHeaders.map((week) => (
                            <TableHead key={week} className="font-bold text-center">
                                {week}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {financialSections.map((section) => (
                        <FinancialRowGroup
                            key={section.title}
                            title={section.title}
                            rows={section.rows}
                            weeks={weekHeaders}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AnalitycsProfitAndLossStatementforGivenDateRange;