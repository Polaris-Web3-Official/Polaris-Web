//importaciones externas
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import Index from './components/Index'
import NavBar from '../../components/navigation/NavBar/NavBar';
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo';


export default function SocialFi() {

  return (
    <div className='container' style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <NavBar />
      <Header />
      <Index />
      <Footer />
      <NavBarTo />
    </div>
  )
}
