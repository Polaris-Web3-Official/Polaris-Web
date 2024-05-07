import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import Index from './components/Index'
import NavBar from '../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo'
import { useParams } from 'react-router';

export default function DetailStatsCoin() {
  const { id } = useParams();

  return (
    <div className='container'>
      <NavBar />
      <Header/>
      <Index coinId={id}/>
      <Footer />
      <NavBarTo />
    </div>
  )
}
