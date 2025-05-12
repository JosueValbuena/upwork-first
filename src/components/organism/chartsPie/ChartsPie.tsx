import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    /* Label,
    Sector */
} from "recharts";

const data = [
    { name: "UNITS 1", value: 65 },
    { name: "COST VALUE 2", value: 27 },
    { name: "RETAIL VALUE 3", value: 8 },
];

const COLORS = ["#6F4AFF", "#4CD964", "#FF8A72"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
}: any) => {
    const radius = outerRadius + 20;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="#000"
            fontWeight="bold"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const ChartsPie = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={true}
                    label={renderCustomizedLabel}
                >
                    {/* @ts-ignore */}
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ChartsPie;