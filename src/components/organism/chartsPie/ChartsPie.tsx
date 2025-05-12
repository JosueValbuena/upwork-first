import ReactApexChart from "react-apexcharts";

const ChartsPie = () => {

    const series = [65, 27, 8];
    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Units', 'Cost Value', 'Retail Value'],
        legend: {
            show: false, // Para mostrar u ocultar la leyenda (por defecto: true)
            position: 'left', // 'top', 'bottom', 'left', 'right' (por defecto: 'bottom')
            horizontalAlign: 'center', // 'left', 'center', 'right' (solo aplica si position es 'top' o 'bottom')
            verticalAlign: 'middle', // 'top', 'middle', 'bottom' (solo aplica si position es 'left' o 'right')
            floating: false, // Si la leyenda debe flotar sobre el gráfico (por defecto: false)
            fontSize: '14px',
            fontWeight: 600,
        },
        markers: {
            width: 0,
            height: '5rem',
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            offsetX: 0,
            offsetY: 0,
            radius: 0,
            customHTML: undefined,
            onClick: undefined,
            onDblClick: undefined
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    /* @ts-ignore */
                    options={options}
                    series={series}
                    type="pie"
                    width={300} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ChartsPie;