//importaciones externas
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import NavBar from '../../components/navigation/NavBar/NavBar';
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo';
import Bento from './components/Bento';

export default function Games() {

  return (
    <div className='container'>
      <NavBar />
      <Header />
      <Bento />
      <Footer />
      <NavBarTo />
    </div>
  )
}
