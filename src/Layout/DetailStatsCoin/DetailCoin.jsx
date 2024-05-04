import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import Index from './components/Index'
import { useParams } from 'react-router';

export default function DetailStatsCoin() {
  const { id } = useParams();

  return (
    <div className='container'>
      <Header/>
      <Index coinId={id}/>
      <Footer />
    </div>
  )
}
