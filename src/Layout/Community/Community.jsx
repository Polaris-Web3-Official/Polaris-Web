//Importaciones externas
//import Comming from '../../components/comuns/Comming'
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import NavBar from '../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo'
import Index from './components/Index'

export default function Community() {
  return (
      <div className='container'>
        <NavBar />
        <Header />
        <Index />
        <Footer />
        <NavBarTo />
      </div>
  )
}
