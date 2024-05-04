import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
//import Index from './components/Index'

import Comming from "../../components/comuns/Comming";
import NavBar from '../../components/navigation/NavBar/NavBar';
import NavBarTo from '../../components/navigation/NavBarTo/NavBarTo';
import { Context } from '../../context/GlobalContextProvider';
import { useContext, useEffect, useState } from 'react';


export default function SocialFi() {
  const { userDevice } = useContext(Context)
  const [widthUser, setWidthUser] = useState();

  useEffect(()=>{
    setWidthUser(userDevice.deviceWhidth)
  }, [userDevice.deviceWhidth])

  console.log(widthUser);

  return (
    <div className='container' style={{borderRadius: 20, display: 'flex', flexDirection:  'column', gap: '1.3rem'}}>
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
