//Importaciones nativas
import { useState } from 'react'

//Importando colores
import { colors } from '../../../constants/colors'

//Importando los estilos
import '../../../styles/components/navBar.css'

//importaciones externas
import ItemNavBar from './ItemNavBar'
import Booton from '../../comuns/Booton'

export default function NavBar() {
  const [nabBarState, setNavBarState]= useState(false)
  const [icon, setIcon]=useState('cancel')

  //Actualizacion de la medida del dispositivo del usuario
  
  //const [userDeviceWidth, setUserDeviceWidth] = useState();
  //const { userDevice } = useContext(Context)
  //useEffect(()=>{
  //  setUserDeviceWidth(userDevice.deviceWhidth)
  //}, [userDevice.deviceWhidth])

  return (
    <div id='navBarContainer' className='navbar_c' style={{
        width: '15.625rem', 
        height: 'calc(-2rem + 100vh)', 
        borderRadius: 15, 
        backgroundColor: colors.mainBackgroundColor2, 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        margin: '1rem' ,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 9999,
      }}>
      <div>
        <div>
          <div style={{display: 'flex', width: '100%', height: 30, borderWidth: 1, justifyContent: 'end', alignItems: 'center', marginTop: 0}}>
            <img id='iconNavBar' onClick={()=>{
              const navBar = document.getElementById('navBarContainer');
              const navBarWidth = navBar.offsetWidth - 20;
              const newState = !nabBarState; 

              if (newState) {
                navBar.style.left = `-${navBarWidth}px`;
                navBar.classList.add('navBar_move');
                setIcon('diaryR');
              } else {
                navBar.style.left = '0';
                setIcon('cancel');
              }

              setNavBarState(newState);
            }} style={{position: 'absolute',width: 20, marginRight: 10, marginTop: 3, cursor: 'pointer', userSelect: 'none', zIndex: 9999}} src={`https://cusoft.tech/wp-content/uploads/2024/05/${icon}.png`}/>
          </div>

          <a style={{opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -5}}>
              <img style={{width: 130, userSelect: 'none'}} src='https://cusoft.tech/wp-content/uploads/2024/05/P001.svg' />
              <span style={{color: colors.borderColor, fontSize: '0.8rem', marginTop: '0.4rem', marginLeft: '0.5rem'}}>( BETA )</span>
            </div>
          </a>
        </div>

        <div style={{opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s'}}>
          <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
            <ItemNavBar url={'/app'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/home.png'/>} line={'Home'}/>
            <ItemNavBar url={'/app/market'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/chart.png'/>} line={'Market'}/>
            <ItemNavBar url={'/app/socialfi'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/social.png'/>} line={'SocialFi'}/>
            <ItemNavBar url={'/app/games'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/play.png'/>} line={'Games'}/>
            <ItemNavBar url={'/app/portfolio'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/wallet.png'/>} line={'PortFolio'}/>
            
          </ul>

          <ul style={{listStyle: 'none', marginTop: 30, padding: 0}}>
            <ItemNavBar url={'/app/profile'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/user.png'/>} line={'Profile'}/>
            <ItemNavBar url={'/app/settings'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/settings.png'/>} line={'Settings'}/>
            <ItemNavBar url={'/app/sponsors'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/heart.png'/>} line={'Sponsors'}/>
            <ItemNavBar 
              url={'https://twitter.com/intent/post?text=Hello%2C+I+invite+you+to+try+Polaris%2C+an+application+to+access+information+in+an+Easy%2C+Fast+and+Convenient+way.+Access+now+by+entering+https%3A%2F%2Fapp.polarisweb3.org.'} 
              target='_blank' 
              icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/share.png'/>} 
              line={'Share with friends'}
            />
          </ul>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s'}}>
        <div className='sponsor' style={{
            margin: 20, 
            backgroundColor: 'transparent', 
            borderRadius: '1.25rem', 
            width: '13rem', 
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
                <a target='_blank' href='https://docs.polarisweb3.org' className='bootonDocs'>
                  DOCUMENTATION
                </a>
              </div>
          </div>
        </div>

        <Booton url='https://x.com/PolarisWeb3' text='Buy your Pass in Kabila' styles={{margin: '0.8rem', width: '90%', height: '3rem', marginTop: '-0.2rem'}}/>
      </div>
    </div>
  )
}
