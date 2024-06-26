//Importaciones nativas
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/GlobalContextProvider'

//importaciones externas
import Comming from '../../components/comuns/Comming'
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import NavBar from '../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo'

export default function Sponsors() {

  const { userDevice } = useContext(Context)
  const [widthUser, setWidthUser] = useState();

  useEffect(()=>{
    setWidthUser(userDevice.deviceWhidth)
  }, [userDevice.deviceWhidth])

  return (
    <div className='container'>
      <NavBar />
      {
        widthUser <= 500  ? (
          <div>
            <Header />
            <Comming />
            <Footer />
          </div>
        ) : (
          <Comming />
        )
      }
      <NavBarTo />
    </div>
  )
}
