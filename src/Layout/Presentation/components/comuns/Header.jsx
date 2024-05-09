//Importaciones nativas
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

//Importando los estilos
import '../../style/header.css'

//Importaciones de Material UI, libreria de componentes
import { Switch } from '@mui/material'
import { styled } from '@mui/material'

//Importaciones Externas
import Booton from '../../../../components/comuns/Booton'
import { colors } from '../../../../constants/colors'


export default function Header() {
  //Inicializando la traduccion 
  const [t, i18n] = useTranslation("global")

  //Inicializando los estados correspondientes
  const [language, setLanguage] = useState(true)
  const [showNavBar, setShowNavBar] = useState(false)

  //En el caso de que (language) cambie, se cambian los leguajes 
  useEffect(()=>{
    if (language) {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("es")
    }
  }, [language])

  //Creando el componente de Switsh (estilo APPLE)
  //Sacado directamente del tutorial de la libreria.
  //Mas informacion en la respectiva documentacion --> https://mui.com/material-ui/react-switch/
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: colors.ButtonColor,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#000' : 'transparent',
          opacity: 1,
          border: '1px solid var(--mainBackgroundColor3)',
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#39393D',
      opacity: 1,
      border: '1px solid var(--mainBackgroundColor3)',
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  //Seleccionamos la imagen y en el caso de ser precionada, se despliega el menu.
  document.getElementById('presentation_header_button_menu_android')
    ?.addEventListener('click', ()=>{
      setShowNavBar(!showNavBar)
    }
  )

  let menu = document.getElementById('presentation_header_menu_android');

  //En el caso de que el usuario halla presionado en el menu
  //Se le adiciona una clase y se le dan x estilos en el codigo css
  useEffect(()=>{
    if(showNavBar){
      menu?.classList?.add('menu_android_active')
      console.log(`menu esta en ${showNavBar}`);
    } else {
      menu?.classList?.remove('menu_android_active')
      console.log(`menu esta en ${showNavBar}`);
    }
  }, [showNavBar])

  return (
  <div className='presentation_header' style={{zIndex: 99999}}>
      <a href="/" style={{display: 'flex', justifyContent: 'center'}}>
        <img className='logo'  src="https://cusoft.tech/wp-content/uploads/2024/05/P001.svg" alt="Polaris Web3 ~ Ecosistem utility for Web3 Community" title='Polaris Web3 ~ Ecosistem utility for Web3 Community'/>
      </a>

      <ul >
        <li><a style={{color: 'white'}}  href='#section1'>{t('header.home')}</a></li>
        <li><a style={{color: 'white'}} href='#section2'>{t('header.introduction')}</a></li>
        <li><a style={{color: 'white'}} href='#section3'>{t('header.utilities')}</a></li>
        <li><a style={{color: 'white'}} href='#section4'>{t('header.sponsors')}</a></li>
        <li><a style={{color: 'white'}} href='#section5'>{t('header.documentation')}</a></li>
      </ul>

      <div className='presentation_header_switch_language' style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img 
        src='https://cusoft.tech/wp-content/uploads/2024/05/banderaEsColor.webp'
        style={{
          width: '1.6rem',
          objectFit: 'contain',
          borderRadius: '0.2rem',
          transition: 'all .5s',
          opacity: language ? 0.3 : 0.7
        }} />
          <div>
            <IOSSwitch 
              sx={{ m: 1 }} 
              checked={language}
              onChange={()=> {
                setLanguage(!language)
                }
              }
            />
          </div>
        <img 
        src='https://cusoft.tech/wp-content/uploads/2024/05/banderaEnColor.webp'
        style={{
          width: '1.6rem',
          objectFit: 'contain',
          borderRadius: '0.2rem',
          transition: 'all .5s',
          opacity: language ? 0.7 : 0.3
        }} />
      </div>

      <Booton 
        className={'presentation_header_open_beta'}
        styles={{
          padding: '0.5rem 1.5rem 0.5rem 1.5rem',
          borderRadius: '0.5rem',
          height: 'auto',
          border: '0.4px solid var(--mainBackgroundColor3)',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-0.4rem'
        }}
        url='/app'
        text='Web APP ( BETA )'
      />


      <img id='presentation_header_button_menu_android' src='https://cusoft.tech/wp-content/uploads/2024/05/menu.png' title='Polaris web3 ~ Menu' alt='Polaris web3 ~ Menu'/>

      
      <div id='presentation_header_menu_android' className='presentation_header_menu_android'>
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--mainBackgroundColor3)',
            padding: '0.5rem 0.5rem',
            marginTop: '-0.5rem',
            alignItems: 'center',
          }}>
          <img style={{width: '150px'}} src='https://cusoft.tech/wp-content/uploads/2024/05/P001.svg' title='Polaris Web3 ~ Logo' alt='Polaris Web3 ~ Logo'/>
          <img onClick={()=> setShowNavBar(!showNavBar)} style={{width: '1.5rem'}} src='https://cusoft.tech/wp-content/uploads/2024/05/cancel.png' title='Polaris Web3 ~ Close Menu' alt='Polaris Web3 ~ Close Menu'/>
        </div>

        <ul >
          <li><a style={{color: 'white'}}  onClick={()=> setShowNavBar(!showNavBar)}   href='#section1'>{t('header.home')}</a></li>
          <li><a style={{color: 'white'}}  onClick={()=> setShowNavBar(!showNavBar)}  href='#section2'>{t('header.introduction')}</a></li>
          <li><a style={{color: 'white'}}  onClick={()=> setShowNavBar(!showNavBar)}  href='#section3'>{t('header.utilities')}</a></li>
          <li><a style={{color: 'white'}}  onClick={()=> setShowNavBar(!showNavBar)}  href='#section4'>{t('header.sponsors')}</a></li>
          <li><a style={{color: 'white'}}  onClick={()=> setShowNavBar(!showNavBar)}  href='#section5'>{t('header.documentation')}</a></li>
        </ul>

        <div className='presentation_header_menu_android_language'>
          <div onClick={()=> i18n.changeLanguage('es')}>
            <img src='https://cusoft.tech/wp-content/uploads/2024/05/banderaEsColor.webp' title='Polaris Web3 ~ Language Esp' alt='Polaris Web3 ~ Language Esp'/>
            <span>Español</span>
          </div>

          <div onClick={()=> i18n.changeLanguage('en')}>
            <img src='https://cusoft.tech/wp-content/uploads/2024/05/banderaEnColor.webp' title='Polaris Web3 ~ Language Eng' alt='Polaris Web3 ~ Language Eng'/>
            <span>English</span>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', transition: 'all .5s', position: 'absolute', bottom: '10px' }}>
          <div className='sponsor' style={{
              margin: 20, 
              backgroundColor: 'transparent', 
              borderRadius: '1.25rem', 
              width: '82vw', 
              height: '10.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div style={{
                width: '80%', 
                height: '80%', 
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{width: '2rem', height: '2rem', borderRadius: '0.5rem', backgroundColor: colors.paragraphColor, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src='https://cusoft.tech/wp-content/uploads/2024/05/star.png' title='Polaris Web3 ~ Star' alt='Polaris Web3 ~ Star'/>
                </div>

                <div>
                  <h6 style={{margin: 0, fontSize: '1rem', fontWeight: 500}}>Need help?</h6>
                  <div style={{marginTop: -5}}>
                    <span style={{margin: 0, fontSize: '0.75rem', fontWeight: 400}}>Please check our docs</span>
                  </div>
                </div>

                <div style={{width: '100%', height: '20%'}}>
                  <a className='bootonDocs'>
                    DOCUMENTATION
                  </a>
                </div>
            </div>
          </div>

          <Booton text='Buy your Star in Kabila' styles={{margin: '-0.2rem 0rem 1rem 1.3rem', width: '82vw', height: '3rem', marginTop: '-0.2rem'}}/>
        </div>
      </div>
    </div>
  )
}
