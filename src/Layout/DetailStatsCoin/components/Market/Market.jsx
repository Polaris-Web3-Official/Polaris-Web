/* eslint-disable react/prop-types */
import '../../styles/market.css'
import { createChart } from 'lightweight-charts'
import { useEffect } from 'react';
import { colors } from '../../../../constants/colors'
import { formatDate } from '../../../../functions/formatDate';
import { insertSaltLine } from '../../../../functions/insertSaltLine';

export default function Market({item}) {
  useEffect(()=>{
    if (item[1]?.total_volumes?.length === 31 && item[0]?.web_slug) {
      const dataChart = []
      item[1]?.prices?.map(x => {
        let x1 = formatDate(new Date(x[0]))
        dataChart.push({
          value: x[1],
          time: x1,
        })
      })
      console.log(dataChart);

      //Opciones de la grafica
      const chartOptions = { 
        layout: { 
          textColor: 'white', 
          background: { 
            type: 'solid',
            color: colors.mainBackgroundColor 
          } 
        },
        grid: {
          vertLines: {
            color: 'rgba(197, 203, 206, 0.05)',
          },
          horzLines: {
            color: 'rgba(197, 203, 206, 0.05)', 
          },
        },
      };

      //Contenedor de la grafica
      const chart = createChart(document.getElementById('market_statics_coin_chart'), chartOptions);
    
      //data de la grafica
      const areaSeries = chart.addAreaSeries({
          lineColor: colors.ButtonColor, topColor: colors.ButtonColor,
          bottomColor: 'rgba(41, 98, 255, 0.28)',
      });
      areaSeries.setData(dataChart);
      chart.timeScale().fitContent();
    }
  }, [item])


  function socialDescription() {
    return (
      <span dangerouslySetInnerHTML={{__html: insertSaltLine(item[0]?.description?.en)}}></span>
    )
  }


  return (
    <div className='market_statics_coin'>
      <div id='market_statics_coin_chart' className='market_staticsCoin_chart'>
      </div>

      <div className='market_statics_aqua_mark'>
        <img src="../../../../../public/svg/polaris/P001.svg" alt="" title=''/>
      </div>
      
      <div className='market_staticsCoin_info'>
        {socialDescription()}
      </div>
    </div>
  )
}
