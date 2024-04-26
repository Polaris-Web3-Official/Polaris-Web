import './style/header.css'


export default function Header({text='Polaris Web3'}) {
  const colors = [
    '#595959',
    '#595959',
    '#595959',
  ]
  const path = window.location.pathname;
  const pathParts = path.split('/').filter(part => part !== ''); 
  
  const pathFormatted = pathParts.map((part, index) => (
    <span key={index} style={{ color: colors[index] }}>
      {part.charAt(0).toUpperCase() + part.slice(1)}
    </span>
  ));

  return (
    <header>
      <div className='container_header'>
        <div className='container_header_c1'>
          <div style={{display: 'flex'}}>
            <img style={{width: '0.9rem'}} src='../../../public/svg/icons/home.svg' title='Home Polaris Web3' alt='Home Polaris Web3'/>
            
            <div style={{display: 'flex', marginLeft: 5, gap: 5}}>
              <span style={{color: colors.borderColor, fontSize: 13}}>/</span>
              <span style={{color: colors.borderColor, fontSize: 13, display: 'flex', gap: 5}}>{pathFormatted}</span>
            </div>
          </div>
          <div style={{fontSize: 20, display: 'flex', gap: 10, color: 'white'}}>{text}</div>
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
