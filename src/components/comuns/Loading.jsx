/* eslint-disable react/prop-types */
//No se realizan importaciones

export default function Loading({alt, title}) {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img style={{width: '10rem'}} src='https://cusoft.tech/wp-content/uploads/2024/05/loading.gif' alt={alt} title={title}/>
    </div>
  )
}