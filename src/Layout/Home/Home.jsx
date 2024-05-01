import './styles/general.css'
import Header from '../../components/comuns/Header'
import RapidInfo from './components/RapidInfo'
import Footer from '../../components/comuns/Footer'
import Bento from './components/Bento'
import { colors } from '../../constants/colors'

export default function Home() {
  return (
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
  )
}
