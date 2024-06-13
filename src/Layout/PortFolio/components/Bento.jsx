//Importando estilos
//import Comming from '../../../components/comuns/Comming'
import '../style/portfolio.css'
import HederaBalance from './HederaBalance'
import HederaCard from './HederaCard'
import LastNfts from './LastNfts'
import LastTransactions from './LastTransactions'
import OrderBook from './OrderBook'
import WalletInteractions from './WalletInteractions'

export default function Bento() {
  return (
    <div className='bento_portfolio'>
      <div className='bento_portfolio_c1'>

        <div className='bento_portfolio_c1_creaditCardPolaris' style={{overflow: 'hidden'}}>
          <HederaCard />
        </div>

        <div className='bento_portfolio_c1_creditBalancePolaris'>
          <HederaBalance />
        </div>

        <div className='bento_portfolio_c1_walletConectedToPolaris'>
          <WalletInteractions />
        </div>

        <div className='bento_portfolio_c1_walletTrackerHelp'>
          <LastTransactions />
        </div>

      </div>


      <div className='bento_portfolio_c2'>
        <div className='bento_portfolio_c2_infoOrderBook'>
          <OrderBook />
        </div>

        <div className='bento_portfolio_c2_historyUserTransactions'>
          <LastNfts />
        </div>

      </div>

      {/*<Comming />*/}
    </div>
  )
}
