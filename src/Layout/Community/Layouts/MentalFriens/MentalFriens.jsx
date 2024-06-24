import Header from '../../../../components/comuns/Header'
import Layout from '../../components/Layout'
import Footer from '../../../../components/comuns/Footer'
import NavBar from '../../../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../../../components/navigation/NavBarTo/NavBarTo'

export default function MentalFriens() {

  return (
    <div className='container'>
      <NavBar />
        <Header />
        <Layout />
        <Footer />
      <NavBarTo />
    </div>
  )
}