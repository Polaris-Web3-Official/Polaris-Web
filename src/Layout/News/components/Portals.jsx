import '../styles/portals.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context/GlobalContextProvider'
import { fetchSources } from '../functions/fetchSources'


export default function Portals() {
  const {news} = useContext(Context)
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchSources(setData)
  },[])
  
  return (
    <div className='news_index_portals'>
      {
        data?.map((item, index)=>{
          return (
            <div style={{
              backgroundColor: news.portal === item.id ? 'var(--mainBackgroundColor)' : 'var(--mainBackgroundColor2)'
            }} 
            key={index} 
            className='news_index_portals_item'
            onClick={()=>{
              news.setPortal(item.id)
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <h4>
                  {item.name.slice(0,22)}
                </h4>
                <span id='news_index_portals_item_icon'>
                  {
                    index < 5 ? <img
                    style={{width: '15px', height: '15px'}}
                    src='https://cusoft.tech/wp-content/uploads/2024/05/happy.png' /> : <i></i>
                  }
                </span>
              </div>
              <section>
                <span>
                  {item.category}
                </span>

                <span >
                  {item.language}
                </span>
              </section>
            </div>
          )
        })
      }
    </div>
  )
}
