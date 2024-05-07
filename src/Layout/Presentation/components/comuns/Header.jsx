import { useState, useEffect } from 'react'
import Booton from '../../../../components/comuns/Booton'
import '../../style/header.css'
import { Switch } from '@mui/material'
import { styled } from '@mui/material'
import { colors } from '../../../../constants/colors'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState(true)

  useEffect(()=>{
    if (language) {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("es")
    }
  }, [language])

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

  return (
  <div className='presentation_header' style={{zIndex: 99999}}>
      <a href="/" style={{display: 'flex', justifyContent: 'center'}}>
        <img  src="../../../../../public/svg/polaris/P001.svg" alt="Polaris Web3 ~ Ecosistem utility for Web3 Community" title='Polaris Web3 ~ Ecosistem utility for Web3 Community'/>
      </a>

      <ul >
        <li><a style={{color: 'white'}}  href='#section1'>{t('header.home')}</a></li>
        <li><a style={{color: 'white'}} href='#section2'>{t('header.introduction')}</a></li>
        <li><a style={{color: 'white'}} href='#section3'>{t('header.utilities')}</a></li>
        <li><a style={{color: 'white'}} href='#section4'>{t('header.sponsors')}</a></li>
        <li><a style={{color: 'white'}} href='#section5'>{t('header.documentation')}</a></li>
      </ul>

      <div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img 
        src='../../../../../public/img/banderaEs.webp'
        style={{
          width: '1.6rem',
          objectFit: 'contain',
          borderRadius: '0.2rem'
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
        src='../../../../../public/img/banderaEn.webp'
        style={{
          width: '1.6rem',
          objectFit: 'contain',
          borderRadius: '0.2rem'
        }} />
      </div>

      <Booton 
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
        text='Web APP ( ALPHA )'
      />
    </div>
  )
}
