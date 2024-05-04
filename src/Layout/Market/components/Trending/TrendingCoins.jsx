import { useState, useEffect } from 'react'
import '../../styles/winnersCoins.css'
import { formatCientyfuNumbre } from '../../../../functions/formatCientyfuNumbre'
import FormatStrPerPoint from '../../../../functions/formatNumbrePerPoint'
import { fetchData } from '../../../../functions/fetchData'
import { colors } from '../../../../constants/colors'
import { Link } from 'react-router-dom'

export default function TrendingCoins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);
  
  const searsh = async () => {
    try {
      setLoading(true);
      const response = await fetchData("https://polarisapp.tech/api/polaris/trending");
      setData(response.coins);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    searsh();
  }, [])

  console.log(data);


  return (
    <div style={{width: '100%', height: '100%', padding: '1rem'}}>
      <nav className='nav_winners_coins' style={{height: '20%'}}>
        <div>
          <span>🔥</span>
          <span>Trendings Coins</span>
        </div>

        <a href='https://docs.polarisweb3.org' target='_blank'>
          <div className='view_more_winners_coin' style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <span style={{marginRight: -5}}>Comming</span>
            <img style={{width: 30}} src='../../../../../public/svg/icons/components/arrow.svg'/>
          </div>
        </a>
      </nav>

      <div className='winners_container'>
        {
          data?.slice(0,10)?.map((item, index)=>{
            console.log(item);
            return (
                <div key={index} className='winners_item'>
                  <div className='winners_item_c1'>
                    <div className='winners_item_c1_imgItem'>
                      <div style={{width: '2rem', height: '2rem', borderRadius: '50%'}}>
                        <img src={item.item.small} alt={`Polaris Web3 - Coin/${item.name}`} title={`Polaris Web3 - Coin/${item.name}`} />
                      </div>
                    </div>

                    <div className='winners_item_c1_nameItem'>
                      <span>
                        {item.item.name.slice(0,14)}
                      </span>
                    </div>
                  </div>

                  <div className='winners_item_c2'>
                    <div className='winners_item_c2_priceItem'>
                      <span style={{color: colors.borderColor}}>
                        {formatCientyfuNumbre(item.item.data.price)?.includes('⇧') ? '$' + formatCientyfuNumbre(item.item.data.price) : '$' + FormatStrPerPoint(item.item.data.price)}
                      </span>
                    </div>

                    <div className='winners_item_c2_change24HItem'>
                      <span style={{color: item.price_change_percentage_24h < 0 ? colors.testColor2 : colors.testColor}}>
                        {FormatStrPerPoint(item.item.data.price_change_percentage_24h.usd)}%
                      </span>
                    </div>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}
