//importando estilos
import '../styles/market.css'

//importaciones externas
import TopCriptos from './TopCriptos/TopCriptos'
import WinnersCoins from './Winners/WinnersCoins'
import TrendingCoins from './Trending/TrendingCoins'
import LossersCoins from './Lossers/LossersCoins'

export default function Index() {
  return (
    <div className='bento_market'>
      <div className='bento_market_c1'>
        <div className='benton_market_c1_containers bento_market_c1_winners'>
          <WinnersCoins />
        </div>

        <div className='benton_market_c1_containers bento_market_c1_trending'>
          <TrendingCoins />
        </div>

        <div className='benton_market_c1_containers bento_market_c1_lossers'>
          <LossersCoins />
        </div>
      </div>

      <div className='bento_market_c2'>
        <TopCriptos />
      </div>
    </div>
  )
}
