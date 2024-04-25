import '../styles/bento.css'
import LineChart from '../../../components/charts/LineChart'
import { CircularProgress } from '@mui/material'
import { colors } from '../../../constants/colors'
import LastTransactinsEth from './LastTransactinsEth'
import BlockchainsNews from './BlockchainsNews'
import BetsProjects from './BetsProjects'
import { useEffect, useState } from 'react'

export default function Bento() {
  // eslint-disable-next-line no-unused-vars
  const [sentiment, setSentiment] = useState(59);
  const [sentimentIcon, setSentimentIcon] = useState('../../../../public/svg/icons/happy.svg');

  const iconCompare = ()=> {
    sentiment < 30 ? 
      setSentimentIcon('../../../../public/svg/icons/angry.svg') 
    : 
    sentiment < 60 ? 
      setSentimentIcon('../../../../public/svg/icons/confused.svg') 
    : 
      setSentimentIcon('../../../../public/svg/icons/happy.svg') 
  }

  useEffect(()=>{
    iconCompare();
  }, [sentiment])

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
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
            <LineChart />
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
