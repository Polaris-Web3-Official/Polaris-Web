import './style/header.css'
import { colors } from '../../constants/colors'

let path = window.location.pathname

export default function Header() {
  console.log(path.charAt(1).toUpperCase() + path.slice(2));
  let pathPage = path.charAt(1).toUpperCase() + path.slice(2) === '/' ? 
                 'Home' : path.charAt(1).toUpperCase() + path.slice(2);
  return (
    <header>
      <div className='container_header'>
        <div className='container_header_c1'>
          <div style={{display: 'flex'}}>
            <img style={{width: '0.9rem'}} src='../../../public/svg/icons/home.svg' title='Home Polaris Web3' alt='Home Polaris Web3'/>
            
            <div style={{display: 'flex', marginLeft: 5, gap: 5}}>
              <span style={{color: colors.borderColor, fontSize: 13}}>/</span>
              <span style={{color: colors.borderColor, fontSize: 13}}>{pathPage}</span>
            </div>
          </div>
          <div style={{fontSize: 20}}>{pathPage}</div>
        </div>
      </div>

      <div className='container_header2'>
        <a><div className='icons_header_container'><img className='icons_header' src="../../../public/svg/icons/mobil.svg" alt="" title='' /></div></a>
        <a><div className='icons_header_container'><img className='icons_header' src="../../../public/svg/icons/chat.svg" alt="" title='' /></div></a>
        <a><div className='icons_header_container'><img className='icons_header' src="../../../public/svg/icons/notification.svg" alt="" title='' /></div></a>
        <a><div className='icons_header_container'><img className='icons_header' src="../../../public/svg/icons/music.svg" alt="" title='' /></div></a>
        <a><div className='icons_header_container'><img className='icons_header' src="../../../public/svg/icons/settings.svg" alt="" title='' /></div></a>
      </div>
    </header>
  )
}
