import { nftsTransaction } from "../data/nftsTransaction";
import '../style/lastNfts.css'

export default function LastNfts() {
  return (
    <div className="portfolio_lastNfts">
      {
        nftsTransaction.map((nft, index) => {
          return (
            <div className="portfolio_lastNfts_card" key={index}>
              <div className="portfolio_lastNfts_card_img">
                <img src={nft.nftImage} alt="" title=""/>
              </div>

              <div className="portfolio_lastNfts_card_info">
                <h3>{nft.nftName}</h3>
                <p>{nft.date}</p>
              </div>
              <div className="portfolio_lastNfts_card_img_amount">
                <p>{nft.amount}</p>
              </div>

              <div className="portfolio_lastNfts_card_img_price">
                <p>{nft.price} HBAR</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
