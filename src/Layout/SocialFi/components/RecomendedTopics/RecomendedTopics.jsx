import { useContext } from 'react'
import { recomendedTopicsHiveExample } from '../../../../data/recomendedTopicsHiveExample'
import './recomended.css'
import { Context } from '../../../../context/GlobalContextProvider'

export default function RecomendedTopics() {

  const { socialFi } = useContext(Context)

  return (
    <div className='socialFi_Posts_recommended_topics' style={{backgroundColor: 'transparent'}}>
      {
        recomendedTopicsHiveExample.map((item, index)=>{
          return (
            <h5 key={index} onClick={()=>{
              socialFi.setSearch(item)
            }}>
              {item}
            </h5>
          )
        })
      }
    </div>
  )
}
