import '../styles/bento.css'
import { CircularProgress } from '@mui/material'
import { colors } from '../../../constants/colors'
import LastTransactinsEth from './LastTransactinsEth'
import BlockchainsNews from './BlockchainsNews'
import { useEffect, useState } from 'react'
import { searchHistoryCoins } from '../functions/searshHistoryCoins'
import { createChart } from 'lightweight-charts'

export default function Bento() {
  // eslint-disable-next-line no-unused-vars
  const [sentiment, setSentiment] = useState(59);
  const [sentimentIcon, setSentimentIcon] = useState('../../../../public/svg/icons/happy.svg');
  const [chartData, setChartData] = useState();

  const iconCompare = ()=> {
    sentiment < 30 ? 
      setSentimentIcon('../../../../public/svg/icons/angry.svg') 
    : 
    sentiment < 60 ? 
      setSentimentIcon('../../../../public/svg/icons/confused.svg') 
    : 
      setSentimentIcon('../../../../public/svg/icons/happy.svg') 
  }

  const shartDataSearsh = async ()=>{
    const data = await searchHistoryCoins()
    setChartData(data)
  }

  useEffect(()=>{
    iconCompare();
    shartDataSearsh()
  }, [sentiment])

  useEffect(()=>{
    setTimeout(()=>{
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
      const chart = createChart(document.getElementById('chart'), chartOptions);
      
      const bitcoinSeries = chart.addAreaSeries({
          lineColor: colors.ButtonColor, topColor: colors.ButtonColor,
          bottomColor: 'rgba(41, 98, 255, 0.28)',
      });

      const ethereumSeries = chart.addAreaSeries({
          lineColor: colors.ButtonColor, topColor: colors.ButtonColor,
          bottomColor: 'rgba(144, 144, 144, 0.28)',
      });

      const tetherSeries = chart.addAreaSeries({
          lineColor: colors.ButtonColor, topColor: colors.ButtonColor,
          bottomColor: 'rgba(147, 220, 140, 0.28)',
      });

      const binanceSeries = chart.addAreaSeries({
          lineColor: colors.ButtonColor, topColor: colors.ButtonColor,
          bottomColor: 'rgba(220, 219, 140, 0.28)',
      });

      const bitcoinDataChart = chartData === undefined ? [] : chartData.bitcoin;
      const ethereumDataChart = chartData === undefined ? [] : chartData.ethereum;
      const tetherDataChart = chartData === undefined ? [] : chartData.tether;
      const binanceDataChart = chartData === undefined ? [] : chartData.binance;
      
      if (chartData) {
        bitcoinSeries.setData(bitcoinDataChart);
        ethereumSeries.setData(ethereumDataChart);
        tetherSeries.setData(tetherDataChart);
        binanceSeries.setData(binanceDataChart);
        chart.timeScale().fitContent();
      }
    }, 30000)
  }, [])

  return (
    <div className='bento'>
      <div className='bento_c1'>
        

        <div className='bento_c1_trackingNetWork'>
        </div>


        <div className='bento_c1_satisfactionMarket'>
          <div className='bento_c1_satisfactionMarket_c1'>
            <h3>Sentiment Market</h3>
            <span>From all blockchains</span>
          </div>

          <div className='bento_c1_satisfactionMarket_c2'>
            <CircularProgress style={{color: sentiment < 30 ? colors.testColor : sentiment < 60 ? colors.ButtonColor : colors.testColor2}} className='progressBar_Home' variant='determinate' value={sentiment} size={120} color='info'  />
          </div>

          <div className='bento_c1_satisfactionMarket_c2-5_sentiment'><span>
            <img style={{width: 40}} src={sentimentIcon}/>
          </span></div>

          <div className='bento_c1_satisfactionMarket_c3'>
            <div className='bento_c1_satisfactionMarket_c3_porcentage'>
              <span className='span_porcentaje-home'>0%</span>
              <span id='span_porcentaje-home' className='span_porcentaje-home'>{`${sentiment}%`}</span>
              <span className='span_porcentaje-home'>100%</span>
            </div>
          </div>
        </div>

        <div className='bento_c1_user'>
          <div id='chart' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
          </div>
        </div>
      </div>

      <div className='bento_c2'>
        <div className='bento_c2_salesNftHedera'>
          <LastTransactinsEth />
        </div>
        <div className='bento_c2_activeUserNFTMarket'>
          <BlockchainsNews />
        </div>
      </div>
    </div>
  )
}
