//Importaciones nativas
import { useEffect, useState } from 'react'
import { createChart } from 'lightweight-charts'

//Importando colores
import { colors } from '../../../constants/colors'

//Importando estilos
import '../styles/bento.css'

//Importando de la libreria de componentes
import { CircularProgress } from '@mui/material'

//Importaciones externas
import BlockchainsNews from './BlockchainsNews'
import Loading from '../../../components/comuns/Loading'
import LastTransactinsEth from './LastTransactinsEth'
import { searchHistoryCoins } from '../functions/searshHistoryCoins'

export default function Bento() {
  // eslint-disable-next-line no-unused-vars
  const [sentiment, setSentiment] = useState(59);
  const [sentimentIcon, setSentimentIcon] = useState('https://cusoft.tech/wp-content/uploads/2024/05/happy.svg');
  const [chartData, setChartData] = useState();
  const [chartLoading, setChartLoading] = useState(true)

  const iconCompare = ()=> {
    console.log('se ejecuto la funcion de los emojis');

    sentiment < 30 ? 
      setSentimentIcon('https://cusoft.tech/wp-content/uploads/2024/05/angry.svg') 
    : 
    sentiment < 60 ? 
      setSentimentIcon('https://cusoft.tech/wp-content/uploads/2024/05/confused.svg') 
    : 
      setSentimentIcon('https://cusoft.tech/wp-content/uploads/2024/05/happy.svg') 
  }

  const shartDataSearsh = async ()=>{
    console.log('se ejecuto la funcion de buscar data');
    const data = await searchHistoryCoins()
    setChartData(data)
  }

  useEffect(()=>{
    iconCompare();
    console.log('se ejecuto el useeffect');
    shartDataSearsh()
  }, [])

  //Si la data del grafico no es undefined y chartLoading es verdadero
  //se crea la info del grafico
  
  if (chartData !== undefined && chartLoading) {
    console.log(chartData);
    console.log(chartLoading);
    setChartLoading(false)
    const chart = createChart(document.getElementById('chart'), {
      rightPriceScale: {
        visible: false
      },
      layout: { 
        textColor: 'white', 
        background: { 
          type: 'solid',
          color: colors.mainBackgroundColor 
        } 
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.0005)',
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.0005)', 
        },
      },
    });
    
    const bitcoinSeries = chart.addAreaSeries({
        lineColor: 'rgba(41, 98, 255, 0.98)', topColor: 'rgba(41, 98, 255, 0.28)',
        bottomColor: 'rgba(41, 98, 255, 0.28)',
    });
    const ethereumSeries = chart.addAreaSeries({
        lineColor: 'rgba(144, 144, 144, 0.98)', topColor: 'rgba(144, 144, 144, 0.28)',
        bottomColor: 'rgba(144, 144, 144, 0.28)',
    });
    const tetherSeries = chart.addAreaSeries({
        lineColor: 'rgba(147, 220, 140, 0.98)', topColor: 'rgba(147, 220, 140, 0.28)',
        bottomColor: 'rgba(147, 220, 140, 0.28)',
    });
    const binanceSeries = chart.addAreaSeries({
        lineColor: 'rgba(220, 219, 140, 0.98)', topColor: 'rgba(220, 219, 140, 0.28)',
        bottomColor: 'rgba(220, 219, 140, 0.28)',
    });
    const bitcoinDataChart = chartData === undefined ? [] : chartData.bitcoin;
    const ethereumDataChart = chartData === undefined ? [] : chartData.ethereum;
    const tetherDataChart = chartData === undefined ? [] : chartData.tether;
    const binanceDataChart = chartData === undefined ? [] : chartData.binance;

    bitcoinSeries.setData(bitcoinDataChart);
    ethereumSeries.setData(ethereumDataChart);
    tetherSeries.setData(tetherDataChart);
    binanceSeries.setData(binanceDataChart);
    chart.timeScale().fitContent();
  }
  

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

        <div className='bento_c1_user' style={{position: 'relative'}}>
          <div style={{
              width: '100%', 
              height: '100%', 
              position: 'absolute', 
              opacity: chartLoading ? 1 : 0, 
              transition: 'all .5s'
            }}>
            <Loading />
          </div>

          <div id='chart' style={{
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%', 
              width: '100%'
            }}></div>
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
