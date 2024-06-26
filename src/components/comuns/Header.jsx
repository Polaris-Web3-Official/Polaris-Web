//Importaciones nativas
import { useContext } from 'react';

//Importando los estilos
import './style/header.css'

//Importaciones externas
import { Context } from '../../context/GlobalContextProvider';
import ItemNavBar from '../navigation/NavBar/ItemNavBar';
import Booton from './Booton';

export default function Header() {

  const colors = [
    '#595959',
    '#595959',
    '#595959',
  ]

  const path = window.location.pathname;

  //Filtramos el path para que solo devuelva el contenido deseado
  const pathParts = path.split('/').filter(part => part !== ''); 
  
  //Funcion para formater el path filtrado
  const pathFormatted = pathParts.map((part, index) => (
    <span key={index} style={{ color: colors[index] }}>
      {part.charAt(0).toUpperCase() + part.slice(1,8)}
    </span>
  ));

  //Cogemos las dimensiones del dispositivo del contexto global
  //de la app
  const { responsiveAndroidNabvar } = useContext(Context)

  return (
    <header className='header_polaris'>
      <div className='container_header'>
        <div className='container_header_c1'>
          <div style={{display: 'flex'}}>
            <img style={{width: '20px'}} src='https://cusoft.tech/wp-content/uploads/2024/05/home.png' title='Home Polaris Web3' alt='Home Polaris Web3'/>
            
            <div style={{display: 'flex', marginLeft: 5, gap: 5}}>
              <span style={{color: colors.borderColor, fontSize: 13}}>/</span>
              <span style={{color: colors.borderColor, fontSize: 13, display: 'flex', gap: 5}}>{pathFormatted}</span>
            </div>
          </div>
          <div id='title_header' style={{ display: 'flex', gap: 10, color: 'white'}}>Polaris Web3 (BETA)</div>
        </div>
      </div>
      
      <div className='container_header2'>
        <a href='https://com-mrwiki-d7.uptodown.com/android/descargar' target='_blank'><div className='icons_header_container'><img className='icons_header' src="https://cusoft.tech/wp-content/uploads/2024/05/mobil.png" alt="" title='' /></div></a>
        <a className='icons_header_container_menuAndroid' style={{display: 'none'}} onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}><div className='icons_header_container'><img className='icons_header' src="https://cusoft.tech/wp-content/uploads/2024/05/menu.png" alt="" title='' /></div></a>
      </div>

      <div className='navBar_android' style={{
        display: 'none',
        position: 'absolute',
        width: '101vw',
        height: '101vh',
        backgroundColor: 'var(--mainBackgroundColor)',
        marginTop: '-0.4rem',
        paddingTop: '1rem',
        marginLeft: responsiveAndroidNabvar.navBar ? '101vw' : '-0.5rem',
        flexDirection: 'column',
        transition: 'all .5s',
        overflowY: 'auto',
      }}>
        <a style={{transition: 'all .5s', marginTop: '1rem', paddingLeft: '2rem', position: 'relative'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: -5}}>
            <img style={{width: 150, userSelect: 'none'}} src='https://cusoft.tech/wp-content/uploads/2024/05/P001.svg' />
            <span style={{ fontSize: '0.5rem', marginTop: '0.4rem', marginLeft: '0.5rem', color: 'var(--borderColor)'}}>( BETA )</span>
            <img onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)} style={{position: 'absolute', width: '2rem', right: 30}} src='https://cusoft.tech/wp-content/uploads/2024/05/cancel.png' alt='' title=''/>
          </div>
        </a>

        <div style={{transition: 'all .5s', width: '100%'}}>
          <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/home.png'/>} line={'Home'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/market'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/chart.png'/>} line={'Market'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/socialfi'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/social.png'/>} line={'SocialFi'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/games'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/play.png'/>} line={'Games'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/portfolio'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/wallet.png'/>} line={'PortFolio'}/>
            </div>
            
          </ul>

          <ul style={{listStyle: 'none', marginTop: 30, padding: 0}}>
            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/profile'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/user.png'/>} line={'Profile'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/settings'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/settings.png'/>} line={'Settings'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar url={'/app/sponsors'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/heart.png'/>} line={'Sponsors'}/>
            </div>

            <div onClick={()=> responsiveAndroidNabvar.setNavBar(!responsiveAndroidNabvar.navBar)}>
              <ItemNavBar 
                url={'https://twitter.com/intent/post?text=Hello%2C+I+invite+you+to+try+Polaris%2C+an+application+to+access+information+in+an+Easy%2C+Fast+and+Convenient+way.+Access+now+by+entering+https%3A%2F%2Fapp.polarisweb3.org.'} 
                target='_blank' 
                icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/share.png'/>} 
                line={'Share with friends'}
              />
            </div>
          </ul>

           <div style={{display: 'flex', flexDirection: 'column', transition: 'all .5s', borderRadius: '0.75rem'}}>
            <div className='sponsor' style={{
                margin: 20, 
                backgroundColor: 'transparent', 
                borderRadius: '1.25rem', 
                width: '89%', 
                height: '10.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div style={{
                  width: '80%', 
                  height: '80%', 
                  borderRadius: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  <div style={{width: '2rem', height: '2rem', borderRadius: '0.5rem', backgroundColor: colors.paragraphColor, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{width: '70%', height: '70%'}} src='https://cusoft.tech/wp-content/uploads/2024/05/star.png'/>
                  </div>

                  <div>
                    <h6 style={{margin: 0, fontSize: '1rem', fontWeight: 500}}>Need help?</h6>
                    <div style={{marginTop: -5}}>
                      <span style={{margin: 0, fontSize: '0.75rem', fontWeight: 400}}>Please check our docs</span>
                    </div>
                  </div>

                  <div style={{width: '100%', height: '20%'}}>
                    <a className='bootonDocs'>
                      DOCUMENTATION
                    </a>
                  </div>
              </div>
            </div>

            <Booton url='https://x.com/PolarisWeb3' text='Buy your Costellation' styles={{width: '90%', height: '3rem', marginTop: '-0.4rem', margin: '0.4rem 0.2rem 2rem 1rem'}}/>
          </div>
        </div>
      </div>
    </header>
  )
}
