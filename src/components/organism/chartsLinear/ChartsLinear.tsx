import ReactApexChart from "react-apexcharts";

const ChartsLinear = () => {

    const series = [{
        name: 'Income',
        type: 'area',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'area',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'area',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }];

    const options = {
        chart: {
            height: 350,
            type: 'area',
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [4, 4, 4]
        },
        /* title: {
            text: 'XYZ - Stock Analysis (2009 - 2016)',
            align: 'left',
            offsetX: 110
        }, */
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
            {
                seriesName: 'Income',
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB'
                },
                labels: {
                    style: {
                        colors: '#008FFB',
                    }
                },
                title: {
                    text: "Income (thousand crores)",
                    style: {
                        color: '#008FFB',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Cashflow',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#00E396'
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    }
                },
                title: {
                    text: "Operating Cashflow (thousand crores)",
                    style: {
                        color: '#00E396',
                    }
                },
            }
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
            },
        },
        legend: {
            horizontalAlign: 'left',
            offsetX: 40
        }
    };


    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    //@ts-ignore
                    options={options}
                    series={series}
                    type="area"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ChartsLinear;