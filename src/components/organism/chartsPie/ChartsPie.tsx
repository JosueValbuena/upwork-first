import ReactApexChart from "react-apexcharts";

const ChartsPie = () => {

    const series = [65, 27, 8];
    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Units', 'Cost Value', 'Retail Value'],
        /* colors: ['#fff', '#fff', '#fff'], // <- COLORES PERSONALIZADOS AQUÍ */
        dataLabels: {
            enable: true,
            style: {
                colors: ['#000'], // Cambia '#000' al color que desees (ej: '#fff' para blanco)
                fontSize: '14px', // Opcional: cambiar el tamaño de la fuente
                //fontWeight: 'bold', // Opcional: cambiar el peso de la fuente
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'radial',
                shadeIntensity: 0.5,
                /* gradientToColors: ['#000000', '#000000', '#000000'], */ // Final color: negro
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        legend: {
            show: false, // Para mostrar u ocultar la leyenda (por defecto: true)
            position: 'left', // 'top', 'bottom', 'left', 'right' (por defecto: 'bottom')
            horizontalAlign: 'center', // 'left', 'center', 'right' (solo aplica si position es 'top' o 'bottom')
            verticalAlign: 'middle', // 'top', 'middle', 'bottom' (solo aplica si position es 'left' o 'right')
            floating: false, // Si la leyenda debe flotar sobre el gráfico (por defecto: false)
            fontSize: '14px',
            fontWeight: 600,
        },
        /* markers: {
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
        }, */
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