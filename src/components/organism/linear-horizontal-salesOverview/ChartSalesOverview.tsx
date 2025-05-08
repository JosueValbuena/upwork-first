import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import ChartsLinearHeader from "../charts-linear-header/ChartsLinearHeader";

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
        <div className="max-w-[1536px] mx-auto my-12">
            <ChartsLinearHeader />
            <ResponsiveContainer
                width='100%'
                height={300}
            >
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />

                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="units_sold"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />

                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="total_sales"
                        stroke="#2d2d2d"
                        activeDot={{ r: 8 }}
                    />

                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="profit"
                        stroke="#82ca9d"
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LinearHorizontalChartSalesOverview;