//Importaciones externas
import Header from '../../components/comuns/Header'
import Bento from './components/Bento';
import Footer from '../../components/comuns/Footer'
import Comming from '../../components/comuns/Comming';
import NavBar from '../../components/navigation/NavBar/NavBar';
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo';


export default function PortFolio() {
  return (
    <div  className='container'>
      <NavBar />
      <Header />
      <Bento />
      <Footer />
      <NavBarTo />
    </div>
  )
}
