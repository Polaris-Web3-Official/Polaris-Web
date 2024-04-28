import React from 'react'
import Header from '../../components/comuns/Header'
import Footer from '../../components/comuns/Footer'
import Index from './components/Index'

export default function SocialFi() {
  return (
    <div className='container' style={{borderRadius: 20, display: 'flex', flexDirection:  'column', gap: '1.3rem'}}>
      <Header />
      <Index />
      <Footer />
    </div>
  )
}
