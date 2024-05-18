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


export default function BarChart() {

  const data = {
    labels: [
      '1 H', 
      '2 H', 
      '3 H', 
      '4 H', 
      '5 H', 
      '6 H', 
      '7 H',
      '9 H',
      '10 H', 
      '11 H', 
      '12 H',
      '13 H', 
      '14 H', 
      '15 H', 
      '16 H', 
      '17 H', 
      '18 H', 
      '19 H',
      '20 H',
      '21 H', 
      '22 H', 
      '23 H',
      '24 H',
      ],
    datasets: [
      {
        label: 'Ventas por mes',
        data: [
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
          ],
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
