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

const ChartsLinear = ({ chartData }: any) => {
    return (
        <ResponsiveContainer
            width='100%'
            height={300}
        >
            <LineChart
                width={500}
                height={300}
                data={chartData}
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
    )
}

export default ChartsLinear