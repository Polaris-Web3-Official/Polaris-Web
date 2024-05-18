/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { createChart } from 'lightweight-charts'
import { colors } from '../../constants/colors';

export default function LineChart({dataChart, color='rgba(41, 98, 255, 0.28)', id}) {

  useEffect(()=>{
     //Opciones de la grafica
    const chartOptions = { 
      layout: { 
        textColor: 'white', 
        background: { 
          type: 'solid',
          color: 'rgba(197, 203, 206, 0.0001)',
        },
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.05)',
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.05)', 
        },
      },
      timeScale: {
        visible: false,
      },

    };
    //Contenedor de la grafica
    const chart = createChart(document.getElementById(id), chartOptions);
  
    //data de la grafica
    const areaSeries = chart.addAreaSeries({
        lineColor: colors.ButtonColor, topColor: colors.ButtonColor,
        bottomColor: color,
        priceLineVisible: false,
    });

    areaSeries.setData(dataChart);
    chart.timeScale().fitContent();
  }, [])

  return (
    <div id={id} style={{width: '100%', height: '100%'}}>
    
    </div>
  )
}
