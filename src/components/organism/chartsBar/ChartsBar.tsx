import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    /* CartesianGrid, */
    Tooltip,
    /* Legend, */
    /* AreaChart,
    Area, */
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "0-30 Days",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "31-60 Days",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "61-90 Days",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "91-180 Days",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "181+ Days",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "365+ Days",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

const ChartsBar = () => {

    return (
        <ResponsiveContainer width={"100%"} height={380}>
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 10,
                    left: 10,
                    bottom: 5,
                }}
            >
                <YAxis yAxisId="left" orientation="left" />

                <XAxis dataKey="name" />
                <Tooltip />

                <Bar dataKey="pv" stackId="a" fill="#FF8A72" barSize={35} yAxisId="left" />
                <Bar dataKey="uv" stackId="a" fill="#6F4AFF" barSize={35} yAxisId="left" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ChartsBar;