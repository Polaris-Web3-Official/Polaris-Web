import './styles/App.css'
import NavBarTo from './components/navigation/NavBarTo/NavBarTo'
import NavBar from './components/navigation/NavBar/NavBar'
import { colors } from './constants/colors'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Layout/Home/Home'
import Market from './Layout/Market/Market'
import Games from './Layout/Games/Games'
import PortFolio from './Layout/PortFolio/PortFolio'
import Profile from './Layout/Profile/Profile'
import Settings from './Layout/Settings/Settings'
import SocialFi from './Layout/SocialFi/SocialFi'
import Sponsors from './Layout/Sponsors/Sponsors'
import Products from './Layout/Products/Products'
import Service from './Layout/Service/Service'
import Materials from './Layout/Materials/Materials'
import Masters from './Layout/Masters/Masters'
import Jobs from './Layout/jobs/Jobs'
import Community from './Layout/Community/Community'
import P2PMarket from './Layout/P2PMarket/P2PMarket'
import Trading from './Layout/Trading/Trading'
import Airdrops from './Layout/Airdrops/Airdrops'
import DetailStatsCoin from './Layout/DetailStatsCoin/DetailCoin'
import Affilieates from './Layout/Affilieates/Affilieates'
import Swaper from './Layout/Swaper/Swaper'
import Recompenzas from './Layout/Recompenzas/Recompenzas'
import DetailPost from './Layout/SocialFi/components/Post/DetailPost'
import Presentation from './Layout/Presentation/Presentation'



function App() {

  return (
    <div style={{backgroundColor: colors.mainBackgroundColor, width: '100%', minHeight: '95vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Presentation />}/>
          
          <Route path='/app' element={<Home />}/>
          <Route path='app/market' element={<Market />}/>
          <Route path='app/market/detail/:id' element={<DetailStatsCoin />}/>
          <Route path='app/socialfi' element={<SocialFi />}/>
          <Route path='app/socialfi/detailPost/:id' element={<DetailPost />}/>
          <Route path='app/games' element={<Games />}/>
          <Route path='app/portfolio' element={<PortFolio />}/>
          <Route path='app/profile' element={<Profile />}/>
          <Route path='app/settings' element={<Settings />}/>
          <Route path='app/sponsors' element={<Sponsors />}/>
          
          <Route path='app/products' element={<Products />}/>
          <Route path='app/affiliates' element={<Affilieates />}/>
          <Route path='app/services' element={<Service />}/>
          <Route path='app/materials' element={<Materials />}/>
          <Route path='app/masters' element={<Masters />}/>
          <Route path='app/recompenzas' element={<Recompenzas />}/>
          <Route path='app/jobs' element={<Jobs />}/>
          <Route path='app/community' element={<Community />}/>
          <Route path='app/p2p-market' element={<P2PMarket />}/>
          <Route path='app/trading' element={<Trading />}/>
          <Route path='app/swaper' element={<Swaper />}/>
          <Route path='app/airdrops' element={<Airdrops />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
