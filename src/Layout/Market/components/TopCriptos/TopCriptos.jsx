import { useState, useEffect } from 'react'
import '../../styles/topCriptos.css'
import { fetchData } from '../../../../functions/fetchData'
import FormatStrPerPoint from '../../../../functions/formatNumbrePerPoint';
import { formatCientyfuNumbre } from '../../../../functions/formatCientyfuNumbre';
import formatMarketCap from '../../../../functions/formatMarketCap';
import { colors } from '../../../../constants/colors'
import ModalCommuns from '../../../../components/comuns/Modal';
import { Link } from 'react-router-dom';

export default function TopCriptos() {
  const [category, setCategory] = useState('crypto');
  const [coin, setCoin] = useState('top');
  const [data, setData] = useState([]);
  const [modal, setModal] = useState([false, false]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  //filtrados de la data
  const [sortByPrice, setSortByPrice] = useState(null);
  const [sortByVolume, setSortByVolume] = useState(null);
  const [sortByMarketCap, setSortByMarketCap] = useState(null);
  const [sortByChange24H, setSortByChange24H] = useState(null);

  const handlePriceSort = ([item, setItem], data) => {
    let sortedData;
    if (item === null || data === 'descendente') {
      sortedData = [...data].sort((a, b) => a.current_price - b.current_price);
      setItem('ascendente');
    } else if (item === 'ascendente') {
      sortedData = [...data].sort((a, b) => b.current_price - a.current_price);
      setItem('descendente');
    } else {
      sortedData = [...data];
      setItem(null);
    }
    setData(sortedData);
  };

  //Modal
  const handleCloseModal = () => {
    setModal([false, false]); 
  };

  const searsh = async () =>{
    try{
      setLoading(true)
      const data = await fetchData(`https://polarisapp.tech/api/polaris/${coin}`);
      setData(data)
    } catch(e){
      console.log(error);
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    searsh();
  }, [coin])

  console.log(data);

  return (
    <div className='top_cryptos'>
      <nav className='top_cryptos_header'>
          <div className='top_cryptos_header_c1'>
            <div className='top_cryptos_header_c1_categories'>
              <ul>
                <li style={{backgroundColor: category === 'crypto' ? colors.mainBackgroundColor3 : 'transparent'}}><img src='../../../../../public/svg/icons/components/chart.svg'/> <span>Cryptocurrencies</span></li>
                <li onClick={()=> setModal([true, false])} style={{backgroundColor: category === 'launchpad' ? colors.mainBackgroundColor3 : 'transparent'}}><img src='../../../../../public/svg/icons/components/suitcase.svg' /> <span>Launchpad</span></li>
                  {modal[0] && (
                    <ModalCommuns
                      open={modal[0]}
                      handleCloseModal={handleCloseModal}
                      title={'Available in V1.0 '}
                      description={'Polaris is currently in BETA, in V1.0 you will be able to see quick and convenient information about new projects coming to market.'}
                    />
                  )}
                <li onClick={()=> setModal([false, true])} style={{backgroundColor: category === 'games' ? colors.mainBackgroundColor3 : 'transparent'}}><img src='../../../../../public/svg/icons/play.svg' /> <span>Gaming</span></li>
                  {modal[1] && (
                    <ModalCommuns
                      open={modal[1]}
                      handleCloseModal={handleCloseModal}
                      title={'Available in V1.0 '}
                      description={'Polaris is currently in BETA, in V1.0 you will be able to see quick and convenient information about the new Gaming projects that come to market.'}
                    />
                  )}
              </ul>
            </div>
            
            <div className='top_cryptos_header_c1_blockchains'>
              <ul>
                <li style={{backgroundColor: coin === 'btc' ? colors.mainBackgroundColor3 : 'transparent'}} onClick={()=> setCoin('btc')}>
                  <img src='/src/Layout/Market/assets/btc.png'/>
                  <span>Bitcoin</span>
                </li>
                <li style={{backgroundColor: coin === 'eth' ? colors.mainBackgroundColor3 : 'transparent'}} onClick={()=> setCoin('eth')}>
                  <img src='/src/Layout/Market/assets/eth.png'/>
                  <span>Ethereum</span>
                </li>
                <li style={{backgroundColor: coin === 'matic' ? colors.mainBackgroundColor3 : 'transparent'}} onClick={()=> setCoin('matic')}>
                  <img src='/src/Layout/Market/assets/matic.png'/>
                  <span>Polygon</span>
                </li>
                <li style={{backgroundColor: coin === 'sol' ? colors.mainBackgroundColor3 : 'transparent'}} onClick={()=> setCoin('sol')}>
                  <img src='/src/Layout/Market/assets/sol.png'/>
                  <span>Solana</span>
                </li>
                <li style={{backgroundColor: coin === 'hbar' ? colors.mainBackgroundColor3 : 'transparent'}} onClick={()=> setCoin('hbar')}>
                  <img src='/src/Layout/Market/assets/hbar.png'/>
                  <span>Hedera</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='top_cryptos_header_c2' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div className='top_cryptos_header_c2_coinList'>
              Coin
            </div>

            <div className='filters' style={{display: 'none', fontSize: '0.7rem', color: 'var(--paragraphColor2)' }}>
              Precio / Volumen / MarketCap / 24H
            </div>

            <div className='top_cryptos_header_c2_coinFilter' >
              <ul >
                <li className='deleted_responsive_android' style={{width: '19%'}}> Rank <span><img /></span></li>
                
                <li style={{ width: '14%' }} onClick={()=> handlePriceSort([sortByPrice, setSortByPrice], data)}>
                  Price <span><img /></span>
                </li>

                <li style={{width: '20%'}} onClick={() => handlePriceSort([sortByVolume,setSortByVolume], data)}>
                  Volumen <span><img /></span>
                </li>
                
                <li style={{width: '28.5%'}} onClick={() => handlePriceSort([sortByMarketCap, setSortByMarketCap], data)}>
                  Market Cap <span><img /></span>
                </li>
                
                <li onClick={() => handlePriceSort([sortByChange24H, setSortByChange24H], data)}>
                  Change 24H <span><img /></span>
                </li>
              </ul>
            </div>
          </div>
      </nav>

      <div style={{height: '100%'}}>
        <div style={{display: 'flex', flexDirection: 'column', overflowY: 'auto', height: '30rem'}}>
          {
            data?.map((item, index)=>{
              return (
                <Link key={index}>
                  <div style={{display: 'flex'}} className='item_cripto_top'>
                    <div className='item_cripto_top_imagen'>
                      <img src={item.image} alt="" title=''/>
                    </div>

                    <div className='item_cripto_top_name'>
                      <span>
                        {item.name}
                      </span>
                    </div>

                    <div className='item_cripto_top_rank'>
                      <span>
                        {item.market_cap_rank}
                      </span>
                    </div>

                    <div className='item_cripto_top_price'>
                      <span>
                        ${String(item.current_price).includes('e') ? formatCientyfuNumbre(item.current_price) : item.current_price}
                      </span>
                    </div>

                    <div className='item_cripto_top_volume'>
                      <span>
                        {formatMarketCap(item.total_volume)}
                      </span>
                    </div>

                    <div className='item_cripto_top_marketCap'>
                      <span>
                        {item.market_cap === null ? ':(' : formatMarketCap(item.market_cap)}
                      </span>
                    </div>

                    <div className='item_cripto_top_change24H'>
                      <span style={{color: item.price_change_24h < 0 ? colors.testColor : colors.testColor2}}>
                        {FormatStrPerPoint(item.price_change_percentage_24h)} %
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
