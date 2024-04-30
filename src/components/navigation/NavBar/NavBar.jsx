import { colors } from '../../../constants/colors'
import ItemNavBar from './ItemNavBar'
import '../../../styles/components/navBar.css'
import Booton from '../../comuns/Booton'
import { useState } from 'react'

export default function NavBar() {
  const [nabBarState, setNavBarState]= useState(false)
  const [icon, setIcon]=useState('cancel')

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
            }} style={{position: 'absolute',width: 20, marginRight: 10, marginTop: 3, cursor: 'pointer', userSelect: 'none', zIndex: 9999}} src={`../../../public/svg/icons/${icon}.svg`}/>
          </div>

          <a style={{opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -5}}>
              <img style={{width: 130, userSelect: 'none'}} src='../../../public/svg/polaris/P001.svg' />
              <span style={{color: colors.borderColor, fontSize: '0.8rem', marginTop: '0.4rem', marginLeft: '0.5rem'}}>( BETA )</span>
            </div>
          </a>
        </div>

        <div style={{opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s'}}>
          <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
            <ItemNavBar url={'/'} icon={<img src='../../../public/svg/icons/home.svg'/>} line={'Home'}/>
            <ItemNavBar url={'/market'} icon={<img src='../../../public/svg/icons/chart.svg'/>} line={'Market'}/>
            <ItemNavBar url={'/socialfi'} icon={<img src='../../../public/svg/icons/social.svg'/>} line={'SocialFi'}/>
            <ItemNavBar url={'/games'} icon={<img src='../../../public/svg/icons/play.svg'/>} line={'Games'}/>
            <ItemNavBar url={'/portfolio'} icon={<img src='../../../public/svg/icons/wallet.svg'/>} line={'PortFolio'}/>
            
          </ul>

          <ul style={{listStyle: 'none', marginTop: 30, padding: 0}}>
            <ItemNavBar url={'/profile'} icon={<img src='../../../public/svg/icons/user.svg'/>} line={'Profile'}/>
            <ItemNavBar url={'/settings'} icon={<img src='../../../public/svg/icons/settings.svg'/>} line={'Settings'}/>
            <ItemNavBar url={'/sponsors'} icon={<img src='../../../public/svg/icons/heart.svg'/>} line={'Sponsors'}/>
            <ItemNavBar 
              url={'https://twitter.com/intent/post?text=Hello%2C+I+invite+you+to+try+Polaris%2C+an+application+to+access+information+in+an+Easy%2C+Fast+and+Convenient+way.+Access+now+by+entering+https%3A%2F%2Fapp.polarisweb3.org.'} 
              target='_blank' 
              icon={<img src='../../../public/svg/icons/share.svg'/>} 
              line={'Share with friends'}
            />
          </ul>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s'}}>
        <div className='sponsor' style={{
            margin: 20, 
            backgroundColor: 'red', 
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
                <img style={{width: '70%', height: '70%'}} src='../../../../public/svg/icons/star.svg'/>
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

        <Booton text='Buy your Costellation' styles={{margin: '0.8rem', width: '90%', height: '3rem', marginTop: '-0.2rem'}}/>
      </div>
    </div>
  )
}
