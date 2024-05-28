import React from 'react'
import '../style/cardGames.css'
import Booton from '../../../components/comuns/Booton'

export default function CardGames({data}) {
  return (
    <div className='games_cardGame'>
      <div className='games_cardGame_card '
        style={{
          backgroundImage: 'url(https://cusoft.tech/wp-content/uploads/2024/05/Screenshot-2024-05-22-141200.png)'
        }}
      >
        <img className='img_hero' src='https://cusoft.tech/wp-content/uploads/2024/05/cleop2.webp' alt='' title=''/>
        <img className='img_logotype' src='https://cusoft.tech/wp-content/uploads/2024/05/White_Legends_of_rhe_past_2line.svg' alt='' title=''/>
        <Booton 
          styles={{
            width: '250px',
            height: '40px',
            position: 'absolute',
            bottom: '5px',
            left: '5px',
            margin: '10px 0px 0px 20px',
            backgroundColor: 'transparent',
          }}
          text='Reed More'
        />
      </div>



      <div className='games_cardGame_card' style={{
          backgroundImage: 'url(https://cusoft.tech/wp-content/uploads/2024/05/10-scaled.webp)'
        }}
      >
        <img className='img_hero' src='https://cusoft.tech/wp-content/uploads/2024/05/cleop2-2.png' alt='' title=''/>
        <img className='img_logotype' style={{
          width: '230px',
          objectFit: 'cover',
          height: '140px',
          margin: '10px 0px -10px 0px'
        }} src='https://cusoft.tech/wp-content/uploads/2024/05/White_Legends_of_rhe_past_2line-svg-1.webp' alt='' title=''/>
        <Booton 
          styles={{
            width: '200px',
            height: '40px',
            position: 'absolute',
            bottom: '5px',
            left: '5px',
            margin: '10px 0px 0px 20px',
            backgroundColor: 'transparent',
          }}
          text='Reed More'
        />
      </div>


      <div className='games_cardGame_card' style={{
          backgroundImage: 'url(https://cusoft.tech/wp-content/uploads/2024/05/Screenshot-2024-05-26-221920.png)'
        }}
      >
        <img className='img_hero' 
          style={{
            top: -50,
          }}
        src='https://cusoft.tech/wp-content/uploads/2024/05/imagen_2024-05-26_222633275.png' alt='' title=''/>
        <img className='img_logotype' src='https://cusoft.tech/wp-content/uploads/2024/05/image-removebg-preview-7-1.png' alt='' title=''/>
        <Booton 
          styles={{
            width: '250px',
            height: '40px',
            margin: '10px 0px 0px 20px',
            position: 'absolute',
            bottom: '5px',
            left: '5px',
            backgroundColor: 'transparent',
          }}
          text='Reed More'
        />
      </div>
    </div>
  )
}
