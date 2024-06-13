import { Link } from 'react-router-dom'
import { data } from '../data/data'
import '../styles/index.css'
import Card from './Card'
import { useContext } from 'react'
import { Context } from '../../../context/GlobalContextProvider'

export default function Index() {

  const { cs } = useContext(Context)


  return (
    <div className='community_index'>
      {
        data.map((item, index) => {
          return (
            <Link  key={index} to={`/app/community/${item.id}`} onClick={()=> cs.setCommunity(item.id)}>
              <div>
                <Card img={item.image.logo} name={`${item.description.slice(0, 25)} ...`} />
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
