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



function App() {

  return (
    <div style={{backgroundColor: colors.mainBackgroundColor, width: '90vw', minHeight: '95vh'}}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='market' element={<Market />}/>
          <Route path='games' element={<Games />}/>
          <Route path='portfolio' element={<PortFolio />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='settings' element={<Settings />}/>
          <Route path='socialfi' element={<SocialFi />}/>
          <Route path='sponsors' element={<Sponsors />}/>
          
          <Route path='products' element={<Products />}/>
          <Route path='services' element={<Service />}/>
          <Route path='materials' element={<Materials />}/>
          <Route path='masters' element={<Masters />}/>
          <Route path='jobs' element={<Jobs />}/>
          <Route path='community' element={<Community />}/>
          <Route path='p2p-market' element={<P2PMarket />}/>
          <Route path='trading' element={<Trading />}/>
          <Route path='airdrops' element={<Airdrops />}/>

        </Routes>

        <NavBarTo />
      </BrowserRouter>
    </div>
  )
}

export default App
