/* eslint-disable react/prop-types */
import '../../styles/general.css'
import { formatCientyfuNumbre } from '../../../../functions/formatCientyfuNumbre';
import { formatNumber } from 'chart.js/helpers';
import { colors } from '../../../../constants/colors'
import { getDomainName } from '../../../../functions/formatDomainName';
import Booton from '../../../../components/comuns/Booton';

export default function General({item}) {
  const data = item[0];
  const SocialData = [
    [
      'Sitio Web', 
      data?.links?.homepage[0]
    ],
    [
      'Exploradores', 
      data?.links?.blockchain_site[0]
    ],
    [
      'Comunidad', 
      [
        data?.links?.subreddit_url, 
        data?.links?.telegram_channel_identifier, 
        data?.links?.twitter_screen_name
      ]
    ],
    [
      'Codigo',
      [
        data?.links?.repos_url.github[0]
      ]
    ],
  ];

  return (
    <div className='general_detailStats'>
      <nav className='header_general_detailStats'>
        <div className='header_general_detailStats_c1'>
          <div className='header_general_detailStats_c1_brand'>
            <img className='image' src={data?.image?.small} alt="" title=''/>

            <div>
              <span className='name'>{data?.name?.slice(0,10)}</span>
              <span className='symbol'>{String(data?.symbol).toLocaleUpperCase()}</span>
            </div>
          </div>

          <div className='header_general_detailStats_c1_stars'>
            <div className='header_general_detailStats_c1_stars_c1'>
              <img src="../../../../../public/svg/icons/star.svg" alt="" title=''/>
            </div>

            <div className='header_general_detailStats_c1_stars_c2'>
              <img src="../../../../../public/svg/icons/bransh.svg" alt="" title=''/>
            </div>
          </div>
        </div>

        <div className='header_general_detailStats_c2'>
          <div className='header_general_detailStats_c2_price'>
            <span>
              {String(data?.market_data?.current_price.usd).includes('e') ? 
                formatCientyfuNumbre(data?.market_data?.current_price.usd) : 
                data.market_data.current_price.usd}
            </span>
          </div>
          

          <div className='header_general_detailStats_c2_change1D'>
            <span style={{color: data?.market_data?.price_change_percentage_24h < 0 ? colors.testColor : colors.testColor2}}>
              {data?.market_data?.price_change_percentage_24h}
            </span>

            <span style={{color: colors.ButtonColor}}>
              (1D)
            </span>
          </div>
        </div>
      </nav>

      

      <div className='general_detailStats_c1-5'>
        <Booton 
          styles={{
            borderRadius: '0.5rem',
            height: '2rem',
            fontSize: '0.8rem'
          }}
          text={`${data?.name} Cryptocurrency Tracker`}
          url='#'
        />
      </div>

      <div className='general_detailStats_c1'>
        <div>
          <span>Precio mas alto 24H</span>
          <span>$ {String(data?.market_data?.high_24h.usd).includes('e') ? 
                formatCientyfuNumbre(data?.market_data?.high_24h.usd) : 
                data.market_data.high_24h.usd}</span>
        </div>

        <div>
          <span>Precio mas bajo 24H</span>
          <span>$ {String(data?.market_data?.low_24h.usd).includes('e') ? 
                formatCientyfuNumbre(data?.market_data?.low_24h.usd) : 
                data.market_data.low_24h.usd}</span>
        </div>

        <div>
          <span>Cap. de mercado</span>
          <span>$ {formatNumber(data?.market_data?.market_cap.usd)}</span>
        </div>

        <div>
          <span>Volumen Total</span>
          <span>$ {formatNumber(data?.market_data?.total_volume.usd)}</span>
        </div>

        <div>
          <span>Supply Total</span>

          <section style={{display: 'flex', gap: '0.3rem', alignItems: 'center'}}>
            <span>{formatNumber(data?.market_data?.total_supply)}</span>
            <span style={{color: colors.borderColor, fontSize: '0.7rem'}}>{String(data?.symbol).toUpperCase()}</span>
          </section>
        </div>

        <div>
          <span>Supply circulante</span>
          
          <section style={{display: 'flex', gap: '0.3rem', alignItems: 'center'}}>
            <span>{formatNumber(data?.market_data?.circulating_supply)}</span>
            <span style={{color: colors.borderColor, fontSize: '0.7rem'}}>{String(data?.symbol).toUpperCase()}</span>
          </section>
        </div>
      </div>

      <div className='general_detailStats_c2'>
        <div className='general_detailStats_c2_socialData'>
          {
            SocialData?.map((i, index) => {
              return (
                <div key={index} data-id={index} className='general_detailStats_c2_socialData_item'>
                  <span>
                    {i[0]}
                  </span>

                  <div className='item_container'>
                    <ul>
                      {Array.isArray(i[1]) ? // Verifica si i[1] es un array
                        i[1]?.map((item, index) => {
                          return (
                            <li key={index}>
                              {i[0] === 'Comunidad' ? (
                                index === 0 ?
                                  <a target='_blank' href={item} title='' className='general_detailStats_c2_socialData_item_website'>
                                    Reddit
                                  </a>
                                  : index === 1 ?
                                    <a target='_blank' href={`https://t.me/${item}`} title='' className='general_detailStats_c2_socialData_item_website'>
                                      Telegram
                                    </a>
                                    :
                                    <a target='_blank' href={`https://x.com/${item}`} title='' className='general_detailStats_c2_socialData_item_website'>
                                      Twitter
                                    </a>
                              ) : (
                                <a href={item}>
                                  GitHub
                                </a>
                              )}
                            </li>
                          )
                        }) : (
                          <li>
                            <a target='_blank' href={i[1]}>
                              {getDomainName(i[1])}
                            </a>
                          </li>
                        )}
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}