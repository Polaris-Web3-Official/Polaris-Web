import LineChart from '../../../components/charts/LineChart'
import { orderbook } from '../data/orderbook'
import '../style/orderBook.css'

export default function OrderBook() {
  return (
    <div className='portfolio_orderBook'>
      <nav className='portfolio_orderBook_header'>
        <h5>Order Book</h5>
      </nav>

      <div className='portfolio_orderBook_content'>
        {
          orderbook.map((order, index) => {
            return (
              <div className='portfolio_orderBook_item' key={index}>
                
                <div className='portfolio_orderBook_item_c1'>
                  <h5>{order.name}</h5>
                  <span>Coin: {order.coinName}</span>
                  <span>Price: {order.price}</span>
                  <span>Total: {order.amount}</span>
                  <span>Date: {order.date}</span>
                </div>


                <div className='portfolio_orderBook_item_c2'>
                  <nav className='portfolio_orderBook_item_c2_header'>
                    <div className='portfolio_orderBook_item_c2_header_action'>
                      <img src="https://cusoft.tech/wp-content/uploads/2024/06/delete.svg" alt="" title=''/>
                      <h5 style={{color: 'var(--testColor)'}}>DELETE</h5>
                    </div>

                    <div className='portfolio_orderBook_item_c2_header_action'>
                      <img src="https://cusoft.tech/wp-content/uploads/2024/05/write.png" alt="" title=''/>
                      <h5 style={{color: 'var(--ButtonColor)'}}>EDIT</h5>
                    </div>
                  </nav>

                  <div className='portfolio_orderBook_item_c2_content'>
                    <div className='portfolio_orderBook_item_c2_content_chart'>
                      <LineChart 
                        id={`portfolio_orderBook_item_c2_content_line_chart_${index}`}
                        dataChart={
                          [
                            {time: '2021-10-01', value: 139},
                            {time: '2021-10-02', value: 140},
                            {time: '2021-10-03', value: 141},
                            {time: '2021-10-04', value: 142},
                            {time: '2021-10-05', value: 143},
                            {time: '2021-10-06', value: 144},
                            {time: '2021-10-07', value: 145},
                            {time: '2021-10-08', value: 146},
                            {time: '2021-10-09', value: 147},
                            {time: '2021-10-10', value: 148},
                          ]
                        }
                      />
                    </div>
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
