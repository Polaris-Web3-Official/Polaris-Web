/* eslint-disable no-unused-vars */
//Importaciones nativas
import { useState, useEffect } from 'react'

//Importando estilos
import '../../styles/winnersCoins.css'

//Importando colores
import { colors } from '../../../../constants/colors'

//Importaciones externas
import FormatStrPerPoint from '../../../../functions/formatNumbrePerPoint'
import { fetchData } from '../../../../functions/fetchData'
import { POLARIS_API } from '../../../../constants/keys'
import { formatCientyfuNumbre } from '../../../../functions/formatCientyfuNumbre'

export default function WinnersCoins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);
  
  const searsh = async () => {
    try {
      setLoading(true);
      const response = await fetchData(`${POLARIS_API.winers}`);
      response?.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    searsh();
  }, [])


  return (
    <div style={{width: '100%', height: '100%', padding: '1rem'}}>
      <nav className='nav_winners_coins' style={{height: '20%'}}>
        <div>
          <span>🔥</span>
          <span>Winners Coins</span>
        </div>

        <a href='https://docs.polarisweb3.org' target='_blank'>
          <div className='view_more_winners_coin' style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <span style={{marginRight: -5}}>Comming</span>
            <img style={{width: 30}} src='https://cusoft.tech/wp-content/uploads/2024/05/arrow.png'/>
          </div>
        </a>
      </nav>

      <div className='winners_container'>
        {
          data.slice(0,10)?.map((item, index)=>{
            return (
              <div key={index} className='winners_item'>
                <div className='winners_item_c1'>
                  <div className='winners_item_c1_imgItem'>
                    <div style={{width: '2rem', height: '2rem', borderRadius: '50%'}}>
                      <img src={item.image} alt={`Polaris Web3 - Coin/${item.name}`} title={`Polaris Web3 - Coin/${item.name}`} />
                    </div>
                  </div>

                  <div className='winners_item_c1_nameItem'>
                    <span>
                      {item.name.slice(0,14)}
                    </span>
                  </div>
                </div>

                <div className='winners_item_c2'>
                  <div className='winners_item_c2_priceItem'>
                    <span style={{color: colors.borderColor}}>
                      {formatCientyfuNumbre(item.current_price)?.includes('⇧') ? '$' + formatCientyfuNumbre(item.current_price) : '$' + FormatStrPerPoint(item.current_price)}
                    </span>
                  </div>

                  <div className='winners_item_c2_change24HItem'>
                    <span style={{color: item.price_change_percentage_24h < 0 ? colors.testColor : colors.testColor2}}>
                      {FormatStrPerPoint(item.price_change_percentage_24h)}%
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
