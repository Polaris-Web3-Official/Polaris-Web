import '../styles/news.css'
import { fetchNews } from '../functions/fetchNews'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../../context/GlobalContextProvider'

export default function News() {
  const [data, setData] = useState([])
  const { news } = useContext(Context)


  useEffect(() => {
    fetchNews(news.portal, setData)
  }, [news.portal])


  if (data?.filter(item => item.source.id === news.portal).length === 0) {  
    return (
      <div className="news_index_news" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{ width: '10rem' }} src='https://cusoft.tech/wp-content/uploads/2024/05/loading.gif' alt='Working' title='Working'/>
      </div>
    )
  }

  console.log(data);

  return (
    <div className="news_index_news">
      {data?.filter(item => item.source.id === news.portal).map((item, index) => (
        <div style={{
          cursor: 'pointer'
        }} className="news_index_news_item" key={index} onClick={()=> window.open(item.url, '_blank')}>

          <div className='news_index_news_item_c1'>
            <h3>{item?.title}</h3>  
            <p>{item?.description}</p>     
            <span>{item.author}</span>
          </div>

          <div className='news_index_news_item_c2'>
            <img src={item?.urlToImage} alt={item?.title} title={item?.title} />
          </div>

          <div className='news_index_news_item_c3'>
            {item?.content}
          </div>

        </div>
      ))}
    </div>
  )
}
