import { colors } from '../../../constants/colors';
import ItemNavBar from './ItemNavBar';
import '../../../styles/components/navBarTo.css';
import { useState, useEffect } from 'react';

export default function NavBarTo() {
  const [nabBarState, setNavBarState] = useState(false); // Inicializado como true para que esté cerrado por defecto
  const [icon, setIcon] = useState('cancel');

  useEffect(() => {
    const navBar = document.getElementById('navBarContainerTo');
    const navBarWidth = navBar.offsetWidth - 18;

    if (!nabBarState) {
      navBar.style.right = `-${navBarWidth}px`;
      navBar.classList.add('navBar_moveTo');
      setIcon('diaryR');
    } else {
      navBar.style.right = '0';
      setIcon('cancel');
    }
  }, [nabBarState]);

  return (
    <div
      id='navBarContainerTo'
      className='navbar_cT'
      style={{
        width: '15.625rem',
        height: 'calc(-2rem + 100vh)',
        borderRadius: 15,
        backgroundColor: colors.mainBackgroundColor2,
        position: 'fixed',
        right: 0,
        top: 0,
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 9999,
      }}
    >
      <div>
        <div>
          <div
            className='div_IconTo'
            style={{ display: 'flex', width: '100%', height: 30, justifyContent: 'start', alignItems: 'center' }}
          >
            <img
              id='iconNavBarTo'
              onClick={() => {
                setNavBarState(prevState => !prevState);
              }}
              style={{ position: 'absolute', width: 20, marginLeft: 10, marginTop: 3, cursor: 'pointer', userSelect: 'none', zIndex: 9999 }}
              src={`../../../public/svg/icons/${icon}.svg`}
            />
          </div>

          <div style={{ marginBottom: -10, opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s' }}>
          </div>
        </div>

        <div style={{ opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s', marginTop: '1rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <ItemNavBar url={'/trading'} icon={<img src='../../../public/svg/icons/chartcompar.svg'/>} line={'Trading'}/>
            <ItemNavBar url={'/p2p-market'} icon={<img src='../../../public/svg/icons/piechart.svg'/>} line={'P2P-Market'}/>
            <ItemNavBar url={'/swaper'} icon={<img src='../../../public/svg/icons/swap.svg'/>} line={'Swaper'}/>
            <ItemNavBar url={'/recompenzas'} icon={<img src='../../../public/svg/icons/gift.svg'/>} line={'Recompenzas'}/>
            <ItemNavBar url={'/airdrops'} icon={<img src='../../../public/svg/icons/products.svg'/>} line={'Airdrops'}/>
            <ItemNavBar url={'/affiliates'} icon={<img src='../../../public/svg/icons/friends.svg'/>} line={'Affiliates'}/>
            <ItemNavBar url={'/community'} icon={<img src='../../../public/svg/icons/bransh.svg'/>} line={'Community'}/>
            <ItemNavBar url={'/jobs'} icon={<img src='../../../public/svg/icons/worker.svg'/>} line={'Jobs'}/>
            <ItemNavBar url={'/materials'} icon={<img src='../../../public/svg/icons/bookopen.svg'/>} line={'Materials'}/>
            <ItemNavBar url={'/masters'} icon={<img src='../../../public/svg/icons/notepad.svg'/>} line={'Masters'}/>
            <ItemNavBar url={'/services'} icon={<img src='../../../public/svg/icons/service.svg'/>} line={'Services'}/>
            <ItemNavBar url={'/products'} icon={<img src='../../../public/svg/icons/products.svg'/>} line={'Products'}/>
          </ul>
        </div>
      </div>
    </div>
  );
}