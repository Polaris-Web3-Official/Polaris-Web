//No son necesarias las importaciones

export default function Comming(alt, title) {
  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'fixed',
      top: '0rem',
      left: '0rem',
      zIndex: 999,
      backgroundColor: 'rgba(16,16,16,0.05)',
      backdropFilter: 'blur(7px)'
      }}>
      <img style={{width: '10rem'}} src='https://cusoft.tech/wp-content/uploads/2024/05/working.gif' alt={alt} title={title}/>
    </div>
  )
}
