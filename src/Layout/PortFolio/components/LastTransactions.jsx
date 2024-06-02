import { transaction } from '../data/transactions'
import '../style/lastTransactions.css'

export default function LastTransactions() {
  return (
    <div className='portfolio_lastTransactions'>
      <nav className='portfolio_lastTransactions_header'>
        <h5>Last Transactions</h5>
      </nav>

      <div className='portfolio_lastTransactions_content'>
        {
          transaction.map((tx, index) => {
            return (
              <div key={index} className='portfolio_lastTransactions_content_item'>
                <div className='portfolio_lastTransactions_content_item_c1'>
                  <h5>{tx.date}</h5>
                  <span>{tx.tx}</span>
                </div>

                <div className='portfolio_lastTransactions_content_item_c2'>
                  <span>${tx.amount}</span>
                  
                  <div>
                    <img src="https://cusoft.tech/wp-content/uploads/2024/05/notepad.png" alt="" title=''/>
                    <span>PDF</span>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>

    </div>
  )
}
