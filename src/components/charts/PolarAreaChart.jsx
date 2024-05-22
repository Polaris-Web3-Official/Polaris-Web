// Importar las dependencias necesarias
import React from 'react';
import { colors } from '../../constants/colors';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = ({ dataChart, labelsChart }) => {
  // Configuración de los datos del chart
  const data = {
    labels: labelsChart,
    datasets: [{
      label: 'My Second Dataset',
      data: dataChart,
      backgroundColor: [
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }]
  };

  // Configuración de las opciones del polar area chart
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
          backdropColor: 'rgba(0, 0, 0, 0)', // Quitar fondo de los ticks
          stepSize: 20, // Ajustar el intervalo de los ticks
        },
        suggestedMin: 0,
        suggestedMax: 1000,
      }
    },
  };

  return (
    <div style={{ height: '120%', width: '120%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
