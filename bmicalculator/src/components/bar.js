import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};




export

    function Bar({ labelData, bmiData }) {



    const labels = labelData;

    const data = {
        labels,
        datasets: [
            {
                label: 'BMI',
                data: bmiData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointRadius: 6,
                pointHoverRadius: 8,
                pointHoverBorderColor: 'white',
                pointHoverBorderWidth: 2
            },
        ],
    };





    return (
        <Line options={options} data={data} />
    );
}

export default Bar;