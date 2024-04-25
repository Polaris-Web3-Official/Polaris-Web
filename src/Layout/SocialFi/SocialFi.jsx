import React from 'react'
import Header from '../../components/comuns/Header'
import Bento from './components/Bento'
import Footer from '../../components/comuns/Footer'

export default function SocialFi() {
  return (
    <div className='container' style={{borderRadius: 20, display: 'flex', flexDirection:  'column', gap: '1.3rem'}}>
      <Header />
      <Bento />
      <Footer />
    </div>
  )
}
