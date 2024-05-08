
import { colors } from '@mui/material'
import '../../style/section3.css'
import ItemSection3 from './ItemSection3'
import { useTranslation } from 'react-i18next'

export default function Section3() {

  const [t] = useTranslation("global");

  return (
    <div className='presentation_section3' id='section3'>
      <h3>“{t('section3.title')}”</h3>
      <p className='presentation_section3_subtitle' style={{color: 'var(--paragraphColor2)'}}>
        {t('section3.subtitle')}
      </p>

       <div className='presentation_section3_carousel'>
        <ItemSection3 
          title={t('section3.cards.card.title')}
          description={t('section3.cards.card.description')}
          altTitle={'Polaris Web3 ~ Mobile App'}
          btnAltTitle={'Polaris Web3 ~ Download App'}
          imgstyles={{
            transform: 'scale(1.4)'
          }}
          img='../../../../../public/img/statsGraficsShot2.png'
          btnUrl='https://com-mrwiki-d7.uptodown.com/android/descargar'
          btnText='Mobil App'
          btnImg='../../../../../public/svg/icons/chart.svg'
        />


        <ItemSection3 
          title={t('section3.cards.card1.title')}
          description={t('section3.cards.card1.description')}
          altTitle={'Polaris Web3 ~ Web App'}
          btnAltTitle={'Polaris Web3 ~ Deploy Web App'}
          imgstyles={{
            transform: 'scale(1.3)',
          }}
          img='../../../../../public/img/statsGraficsShot.png'
          btnUrl='app'
          btnText='Web App'
          btnImg='../../../../../public/svg/icons/friends.svg'
        />

        <ItemSection3 
          title={t('section3.cards.card2.title')}
          description={t('section3.cards.card2.description')}
          btnUrl='https://docs.polarisweb3.org'
          imgstyles={{
            transform: 'scale(1.3)'
          }}
          img='../../../../../public/img/statsGraficsShot5.png'
          altTitle={'Polaris Web3 ~ Discord Bot'}
          btnAltTitle={'Polaris Web3 ~ Reed More Discord Bot'}
          btnText='Discord Bot'
          btnImg='../../../../../public/svg/icons/service.svg'
        />

        <ItemSection3 
          title={t('section3.cards.card3.title')}
          description={t('section3.cards.card3.description')}
          altTitle={'Polaris Web3 ~  Extension Web'}
          btnAltTitle={'Polaris Web3 ~ Reed More Extension Web'}
          imgstyles={{
            transform: 'scale(1.3)'
          }}
          img='../../../../../public/img/statsGraficsShot4.png'
          btnUrl='https://docs.polarisweb3.org'
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
          btnUrl='https://docs.polarisweb3.org'
          btnText='Polaris Kit'
          btnImg='../../../../../public/svg/icons/notepad.svg'
          altTitle={'Polaris Web3 ~ Tracking Kit'}
          btnAltTitle={'Polaris Web3 ~ Reed More Tracking Kit'}
        />

        <ItemSection3 
          title={t('section3.cards.card5.title')}
          description={t('section3.cards.card5.description')}
          imgstyles={{
            transform: 'scale(2)'
          }}
          img='https://cusoft.tech/wp-content/uploads/2024/04/image-9.webp'
          btnUrl='https://docs.polarisweb3.org'
          btnText='Polaris Game'
          btnImg='../../../../../public/svg/icons/play.svg'
          altTitle={'Polaris Web3 ~ Video Games'}
          btnAltTitle={'Polaris Web3 ~ Reed More Video Games'}
        />
       </div>
    </div>
  )
}
