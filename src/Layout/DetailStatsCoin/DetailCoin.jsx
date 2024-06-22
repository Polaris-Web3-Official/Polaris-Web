//importaciones nativas
import { useParams } from 'react-router';

//Importaciones externas
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import Index from './components/Index'
import NavBar from '../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo'
import Comming from '../../components/comuns/Comming';

export default function DetailStatsCoin() {

  //recuperamos el id la x(coin) y se la pasamos al index
  const { id } = useParams();

  return (
    <div className='container'>
      <NavBar />
      <Header/>
      <Index coinId={id}/>
      <Comming />
      <Footer />
      <NavBarTo />
    </div>
  )
}
