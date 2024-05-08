//Importando colores
import { colors } from '../../constants/colors'

//Importando estilos
import './styles/general.css'

//Importaciones externas
import Header from '../../components/comuns/Header'
import RapidInfo from './components/RapidInfo'
import Footer from '../../components/comuns/Footer'
import Bento from './components/Bento'
import NavBar from '../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='container' 
      style={{
          backgroundColor: colors.mainBackgroundColor, 
          borderRadius: 20, 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%',
          gap: 20,
        }}>
        <Header />
        <RapidInfo />
        <Bento />
        <Footer />
      </div>
      <NavBarTo />
    </div>
  )
}
