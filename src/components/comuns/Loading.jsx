import React from 'react'

export default function Loading({alt, title}) {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img style={{width: '10rem'}} src='../../../public/img/loading.gif' alt={alt} title={title}/>
    </div>
  )
}
