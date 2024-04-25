import { useState, useEffect } from 'react'
import '../styles/blockchainNews.css'
import { fetchData } from '../../../functions/fetchData'

export default function BlockchainsNews() {
  const [state, setState] = useState();

  const searsh = async ()=>{
    try {
      const response = await fetchData('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=aeda2c8f01eQF0LJ3ESCZD303DZ4443f9ac4b40918bade78');
      setState(response.feed)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searsh();
  }, []);

  console.log(state);

  return (
    <div className='news_home'>
      {
        state?.map((item, index)=>{
          return (
            <a target='_blank' href={item.url} key={index}>
              <div className='news_home_c1'>  
                <img src={item.banner_image} alt={item.title} title={item.title} />
                
                <div className='news_home_c1-general'>
                  <div className='news_home_c1_title'> 
                    <span>{item.title.slice(0,70)} ...</span>
                  </div>

                  <div className='news_home_c2'>
                    <div className='news_home_c2_topics'>
                      {item.topics.slice(0,2).map((topic)=>{
                        return (
                          <span className='news_home_c2_topics_topic' key={topic.topic}>
                            {topic.topic}
                          </span>
                        )
                      })}
                    </div>

                    <div className='news_home_c2_domain'>
                      <span>{item.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}