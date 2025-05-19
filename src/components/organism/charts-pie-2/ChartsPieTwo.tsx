import { useAppSelector } from "@/store/hooks";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "UNITS 1", value: 65 },
    { name: "COST VALUE 2", value: 27 },
    { name: "RETAIL VALUE 3", value: 8 },
];

const GRADIENTS = [
    { from: "#6F4AFF", to: "#A891FF" },
    { from: "#4CD964", to: "#A1F2C1" },
    { from: "#FF8A72", to: "#FFC5B8" },
];

const RADIAN = Math.PI / 180;

const ChartsPieTwo = () => {
    const { theme } = useAppSelector(state => state.themeMode);

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
                fill={theme === 'dark' ? "#fff" : "#000"}
                fontWeight="bold"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                {/* Gradientes SVG */}
                <defs>
                    {GRADIENTS.map((grad, index) => (
                        <linearGradient id={`grad${index}`} key={index} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={grad.from} />
                            <stop offset="100%" stopColor={grad.to} />
                        </linearGradient>
                    ))}
                </defs>

                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    labelLine={true}
                    label={renderCustomizedLabel}
                >
                    {/* @ts-ignore */}
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={`url(#grad${index})`}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ChartsPieTwo;