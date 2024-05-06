import React from 'react'
import Booton from '../../../../components/comuns/Booton'
import '../../style/header.css'

export default function Header() {
  return (
  <div className='presentation_header' style={{zIndex: 99999}}>
      <a href="/" style={{display: 'flex', justifyContent: 'center'}}>
        <img  src="../../../../../public/svg/polaris/P001.svg" alt="Polaris Web3 ~ Ecosistem utility for Web3 Community" title='Polaris Web3 ~ Ecosistem utility for Web3 Community'/>
      </a>

      <ul >
        <li><a style={{color: 'white'}}  href='#section1'>Home</a></li>
        <li><a style={{color: 'white'}} href='#section2'>Introduction</a></li>
        <li><a style={{color: 'white'}} href='#section3'>Utilities</a></li>
        <li><a style={{color: 'white'}} href='#section4'>Sponsors</a></li>
        <li><a style={{color: 'white'}} href='#section5'>Documentation</a></li>
      </ul>

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
