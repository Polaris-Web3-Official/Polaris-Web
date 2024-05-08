//importaciones externas
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import Index from './components/Index'
import NavBar from '../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo'

export default function Market() {
  return (
    <div className='container' style={{borderRadius: 20, display: 'flex', flexDirection:  'column', gap: '1.3rem'}}>
      <NavBar />
      <Header />
      <Index />
      <Footer />
      <NavBarTo />
    </div>
  )
}
