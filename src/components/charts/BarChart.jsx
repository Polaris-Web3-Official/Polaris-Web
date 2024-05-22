/* eslint-disable react/prop-types */
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from 'react-chartjs-2';


export default function BarChart(
  {
    dataChart = [
            50, 
            60, 
            70, 
            80, 
            60, 
            70, 
            80,
            50, 
            60, 
            70, 
            80, 
            60, 
            70, 
            80,
            50, 
            60, 
            70, 
            80, 
            60, 
            70, 
            80,
            80, 
            60, 
            70, 
            80,
          ], labelsChart}) {
  
  const labels = Array.from({ length: 24 }, (_, i) => `${i} H`);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Likes per hour',
        data: dataChart,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        borderRadius: 20, // Aquí defines el radio del borde
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Gráfico de Barras'
      }
    }
  };

  return (
    <div style={{height: '100%', width: '100%', marginTop: '0.5rem'}}>
      <Bar data={data} options={options}/>
    </div>
  )
}
