import '../style/listGames.css'
import { gamesExamples } from '../data/gamesExamples'

export default function ListGames({data}) {
  return (
    <div className='games_listGames'>
      {
        gamesExamples.map((item, index)=>{
          return (
            <div key={index} className='games_listGames_item'>
              <img src={item.img} alt={item.name} title={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
