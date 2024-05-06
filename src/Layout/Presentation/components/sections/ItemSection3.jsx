import React from 'react'

export default function ItemSection3({
    img='../../../../../public/img/hive_image.jpeg', 
    title='title', 
    description='description de la card x'
  }) {
  return (
    <div className='presentation_section3_carousel_item'>
      <img style={{
        width: '100%',
        borderRadius: '0.75rem'
      }} src={img}/>

      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}
