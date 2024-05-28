import '../style/hederaBalance.css'

export default function HederaBalance() {
  return (
    <div className='portfolio_hedera_balance'>
      <div style={{
        width: '89%',
        textAlign: 'start',
      }}>
        General Info
      </div>
      <div className='portfolio_hedera_balance_info'>
        <div className='portfolio_hedera_balance_info_c1'>
          <p>Balance</p>
          <img src='https://cusoft.tech/wp-content/uploads/2024/05/menu.png' title='' alt=''/>
        </div>


        <div className='portfolio_hedera_balance_info_c2'>
          <h2>$463.695 <span style={{
            color: 'var(--ButtonColor)',
            fontSize: 14,
            fontWeight: 'normal',
          }}>HBAR</span></h2>
        </div>
      </div>

      <div className='portfolio_hedera_balance_stats'>

        <div className='portfolio_hedera_balance_stats_c1'>
          NEWEST
        </div>

        <div className='portfolio_hedera_balance_stats_info'>
          <div className='portfolio_hedera_balance_stats_info_icon'>
            <img src='https://cusoft.tech/wp-content/uploads/2024/05/externalLink.png' alt='' title=''/>
          </div>
          
          <div className='portfolio_hedera_balance_stats_info_days'>
            <span className='c1'>Last Sell</span>
            <span className='c2'>Today, 16:36</span>
          </div>

          <div className='portfolio_hedera_balance_stats_info_porcent'>-25,8%</div>
        </div>
      </div>
    </div>
  )
}
