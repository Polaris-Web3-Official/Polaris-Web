import Booton from "../../../components/comuns/Booton";
import '../style/walletInteraction.css'

export default function WalletInteractions() {
  return (
    <div className="portfolio_wallet_interactions">
      
      <div className="portfolio_wallet_interactions_c1">
        <h3>Most Interactions</h3>

        <Booton
          text="Tracking"
          styles={{
            height: 40,
            width: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.75rem',
          }}  
        />
      </div>

      <div className="portfolio_wallet_interactions_c2">
        <div className="portfolio_wallet_interactions_c2_v1">
          <img src="https://cusoft.tech/wp-content/uploads/2024/05/happy.svg" alt="" title=""/>
          <span>0.0.145675</span>
          <img style={{
            position: 'absolute',
            right: 18,
          }} src="https://cusoft.tech/wp-content/uploads/2024/05/bookopen.png" alt="" title=""/>
        </div>

        <div className="portfolio_wallet_interactions_c2_v1">
          <img src="https://cusoft.tech/wp-content/uploads/2024/05/angry.svg" alt="" title=""/>
          <span>0.0.145675</span>
          <img style={{
            position: 'absolute',
            right: 18,
          }} src="https://cusoft.tech/wp-content/uploads/2024/05/bookopen.png" alt="" title=""/>
        </div>

        <div className="portfolio_wallet_interactions_c2_v1">
          <img src="https://cusoft.tech/wp-content/uploads/2024/05/confused.svg" alt="" title=""/>
          <span>0.0.145675</span>
          <img style={{
            position: 'absolute',
            right: 18,
          }} src="https://cusoft.tech/wp-content/uploads/2024/05/bookopen.png" alt="" title=""/>
        </div>

        <div className="portfolio_wallet_interactions_c2_v1">
          <img src="https://cusoft.tech/wp-content/uploads/2024/05/angry.svg" alt="" title=""/>
          <span>0.0.145675</span>
          <img style={{
            position: 'absolute',
            right: 18,
          }} src="https://cusoft.tech/wp-content/uploads/2024/05/bookopen.png" alt="" title=""/>
        </div>
      </div>

    </div>
  )
}
