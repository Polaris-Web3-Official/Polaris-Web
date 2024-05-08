//No son necesarias las importaciones

export default function Comming(alt, title) {
  return (
    <div style={{ height: '44rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img style={{width: '10rem'}} src='../../../public/img/working.gif' alt={alt} title={title}/>
    </div>
  )
}
