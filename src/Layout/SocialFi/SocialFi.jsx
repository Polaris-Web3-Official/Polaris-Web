import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
//import Index from './components/Index'

import Comming from "../../components/comuns/Comming";

export default function SocialFi() {
  return (
    <div className='container' style={{borderRadius: 20, display: 'flex', flexDirection:  'column', gap: '1.3rem'}}>
      <Header text='SocialFi Hive Blockchain ( BETA )'/>
      <Comming />
      <Footer />
    </div>
  )
}
