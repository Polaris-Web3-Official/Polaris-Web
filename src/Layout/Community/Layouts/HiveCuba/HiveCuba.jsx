import NavBar from '../../../../components/navigation/NavBar/NavBar'
import Header from '../../../../components/comuns/Header'
import Layout from '../../components/Layout'
import Footer from '../../../../components/comuns/Footer'
import NavBarTo from '../../../../components/navigation/NavBarTo/NavBarTo'

export default function HiveCuba() {
  return (
    <div className='container'  style={{marginTop: '1.5rem'}}>
      <NavBar />
        <Header />
        <Layout />
        <Footer />
      <NavBarTo />
    </div>
  )
}
