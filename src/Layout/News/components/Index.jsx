
import '../styles/index.css'
import News from './News'
import Portals from './Portals'

export default function Index() {

  return (
    <div className="news_index">
      <Portals />
      <News />
    </div>
  )
}
