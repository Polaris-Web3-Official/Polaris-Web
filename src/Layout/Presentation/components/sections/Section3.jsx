
import { colors } from '@mui/material'
import '../../style/section3.css'
import ItemSection3 from './ItemSection3'
import { useTranslation } from 'react-i18next'

export default function Section3() {

  const [t] = useTranslation("global");

  return (
    <div className='presentation_section3' id='section3'>
      <h3>“{t('section3.title')}”</h3>
      <p style={{color: 'var(--paragraphColor2)'}}>
        {t('section3.subtitle')}
      </p>

       <div className='presentation_section3_carousel'>
        <ItemSection3 
          title={t('section3.cards.card.title')}
          description={t('section3.cards.card.description')}

          imgstyles={{
            transform: 'scale(1.4)'
          }}
          img='../../../../../public/img/statsGraficsShot2.png'

          btnText='Mobil App'
          btnImg='../../../../../public/svg/icons/chart.svg'
        />


        <ItemSection3 
          title={t('section3.cards.card1.title')}
          description={t('section3.cards.card1.description')}

          imgstyles={{
            transform: 'scale(1.3)',
          }}
          img='../../../../../public/img/statsGraficsShot.png'
          
          btnText='Web App'
          btnImg='../../../../../public/svg/icons/friends.svg'
        />

        <ItemSection3 
          title={t('section3.cards.card2.title')}
          description={t('section3.cards.card2.description')}

          imgstyles={{
            transform: 'scale(1.3)'
          }}
          img='../../../../../public/img/statsGraficsShot5.png'
        
          btnText='Discord Bot'
          btnImg='../../../../../public/svg/icons/service.svg'
        />

        <ItemSection3 
          title={t('section3.cards.card3.title')}
          description={t('section3.cards.card3.description')}

          imgstyles={{
            transform: 'scale(1.3)'
          }}
          img='../../../../../public/img/statsGraficsShot4.png'
        
          btnText='Extension Web'
          btnImg='../../../../../public/svg/icons/products.svg'
        />

        <ItemSection3 
          title={t('section3.cards.card4.title')}
          description={t('section3.cards.card4.description')}
          imgstyles={{
            transform: 'scale(2)'
          }}
          img='https://cusoft.tech/wp-content/uploads/2024/04/image-9.webp'
        
          btnText='Polaris Kit'
          btnImg='../../../../../public/svg/icons/notepad.svg'
        />

        <ItemSection3 
          title={t('section3.cards.card5.title')}
          description={t('section3.cards.card5.description')}
          imgstyles={{
            transform: 'scale(2)'
          }}
          img='https://cusoft.tech/wp-content/uploads/2024/04/image-9.webp'
        
          btnText='Polaris Game'
          btnImg='../../../../../public/svg/icons/play.svg'
        />
       </div>
    </div>
  )
}
