/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js'
import { CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { colors } from '../../constants/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({
  title='Comparacion Volumen 10H',
  styles={
    width: '100%',
    height: '100%',
  },
  data={
  labels: [
    '10 H',
    '9 H',
    '8 H',
    '7 H',
    '6 H',
    '5 H',
    '4 H',
    '3 H',
    '2 H',
    '1 H',
  ],
  datasets: [
    {
      label: 'Bitcoin',
      data: [11,17,13,14,9,5,11, 11,11,11],
      borderColor: 'rgb(236,225,147)',
      tension: 0.40,
      backgroundColor: 'rgb(236,225,147)',
      borderWidth: 2,
      hoverBorderWidth: 20,
    },
    {
      label: 'Ethereum',
      data: [14,12,11,18,21,2,15,15,15,15],
      borderColor: 'rgb(141,141,141)',
      backgroundColor: 'rgb(141,141,141)',
      tension: 0.40,
      borderWidth: 2,
      hoverBorderWidth: 20,
    },
    {
      label: 'Theter',
      data: [8, 10, 9, 11, 7, 6, 10,10,10,10],
      backgroundColor:'rgb(114,219,126)',
      borderColor: 'rgb(114,219,126)',
      tension: 0.40,
      borderWidth: 2,
      hoverBorderWidth: 20,
    },
    {
      label: 'Binance',
      data:[9, 8, 10, 12, 11, 13, 14,14,14,14],
      backgroundColor: 'rgb(219,183,114)',
      borderColor: 'rgb(219,183,114)',
      tension: 0.40,
      borderWidth: 2,
      hoverBorderWidth: 20,
    },
  ]
},
}){
  return (
  <div style={{width: styles.width, height: styles.height, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Line 
      data={data}
      options={{
        responsive: true,
        plugins: {
          title: {
            text: title
          },
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }}
    />
  </div>
  )
}