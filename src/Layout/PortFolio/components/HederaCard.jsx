import '../style/hederaCard.css'

export default function HederaCard() {
  return (
    <div className="portfolio_hedera_card">
      <div className='portfolio_hedera_card_info'>
        <h4>Hedera Card</h4>
        <img src='https://cusoft.tech/wp-content/uploads/2024/05/P001.svg' alt='' title=''/>
      </div>

      <div className='portfolio_hedera_card_number'>
        0.0.5717120
      </div>

      <div className='portfolio_hedera_card_caduct'>
        <div className='portfolio_hedera_card_caduct_c'>
          <p>Firt hash</p>
          <h3>05/24</h3>
        </div>

        <div className='portfolio_hedera_card_caduct_c'>
          <p>Last hash</p>
          <h3>15/24</h3>
        </div>
      </div>
    </div>
  )
}