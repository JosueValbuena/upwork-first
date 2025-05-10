import ChartsLinearHeader from "../charts-linear-header/ChartsLinearHeader";
import ChartsLinear from "../chartsLinear/ChartsLinear";

const data = [
    {
        month: "Jan",
        units_sold: 20,
        total_sales: 10,
        profit: 50,
    },
    {
        month: "Feb",
        units_sold: 15,
        total_sales: 25,
        profit: 50,
    },
    {
        month: "Mar",
        units_sold: 40,
        total_sales: 30,
        profit: 50,
    },
    {
        month: "Abr",
        units_sold: 60,
        total_sales: 50,
        profit: 50,
    },
    {
        month: "May",
        units_sold: 60,
        total_sales: 50,
        profit: 50,
    },
    {
        month: "Jun",
        units_sold: 60,
        total_sales: 50,
        profit: 50,
    },
    {
        month: "Jul",
        units_sold: 60,
        total_sales: 50,
        profit: 30,
    },
    {
        month: "Aug",
        units_sold: 60,
        total_sales: 50,
        profit: 30,
    },
    {
        month: "Sep",
        units_sold: 60,
        total_sales: 50,
        profit: 30,
    },
    {
        month: "Oct",
        units_sold: 60,
        total_sales: 50,
        profit: 30,
    },
    {
        month: "Nov",
        units_sold: 60,
        total_sales: 50,
        profit: 30,
    },
    {
        month: "Dec",
        units_sold: 60,
        total_sales: 50,
        profit: 30,
    },
];

/* Total sales profit units sold */

export const LinearHorizontalChartSalesOverview = () => {
    return (
        <div className="bg-white p-2 max-w-[1366px] mx-auto my-8">
            <ChartsLinearHeader />
            <ChartsLinear chartData={data} />
        </div>
    );
};

export default LinearHorizontalChartSalesOverview;