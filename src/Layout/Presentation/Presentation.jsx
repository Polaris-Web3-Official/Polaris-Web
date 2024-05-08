//Importaciones externas
import Header from './components/comuns/Header'
import Index from './components/Index'
import Footer from './components/comuns/Footer'

export default function Presentation() {
  //Le damos al documento padding 0 para crear un entorno limpio
  document.getElementById('root').style.padding = '0'

  return (
    <div style={{width: '100vw', minHeight: '200vh', backgroundColor: 'rgb(0,0,0)', overflow: 'hidden'}}>
      <Header />
      <Index />
      <Footer />
    </div>

  )
}
