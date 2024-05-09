//Importaciones nativas
import { useState, useEffect } from 'react';

//importando colores
import { colors } from '../../../constants/colors';

//Importanco estilos
import '../../../styles/components/navBarTo.css';

//Emportaciones externas
import ItemNavBar from './ItemNavBar';


export default function NavBarTo() {
  const [nabBarState, setNavBarState] = useState(false); // Inicializado como false para que esté cerrado por defecto
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
              src={`https://cusoft.tech/wp-content/uploads/2024/05/${icon}.png`}
            />
          </div>

          <div style={{ marginBottom: -10, opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s' }}>
          </div>
        </div>

        <div style={{ opacity: icon === 'cancel' ? 1 : 0, transition: 'all .5s', marginTop: '1rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <ItemNavBar url={'/app/trading'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/chartcompar.png'/>} line={'Trading'}/>
            <ItemNavBar url={'/app/p2p-market'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/piechart.png'/>} line={'P2P-Market'}/>
            <ItemNavBar url={'/app/swaper'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/swap.png'/>} line={'Swaper'}/>
            <ItemNavBar url={'/app/recompenzas'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/gift.png'/>} line={'Rewards'}/>
            <ItemNavBar url={'/app/airdrops'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/airdrop.png'/>} line={'Airdrops'}/>
            <ItemNavBar url={'/app/affiliates'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/friends.png'/>} line={'Affiliates'}/>
            <ItemNavBar url={'/app/community'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/bransh.png'/>} line={'Community'}/>
            <ItemNavBar url={'/app/jobs'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/worker.png'/>} line={'Jobs'}/>
            <ItemNavBar url={'/app/materials'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/bookopen.png'/>} line={'Materials'}/>
            <ItemNavBar url={'/app/masters'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/notepad.png'/>} line={'Masters'}/>
            <ItemNavBar url={'/app/services'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/service.png'/>} line={'Services'}/>
            <ItemNavBar url={'/app/products'} icon={<img src='https://cusoft.tech/wp-content/uploads/2024/05/products.png'/>} line={'Products'}/>
          </ul>
        </div>
      </div>
    </div>
  );
}