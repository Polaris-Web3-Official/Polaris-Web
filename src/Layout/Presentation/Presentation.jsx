import React from 'react'
import Header from './components/comuns/Header'
import Index from './components/Index'
import Footer from './components/comuns/Footer'

export default function Presentation() {
  document.getElementById('root').style.padding = '0'

  return (
    <div style={{border: '1px solid red', width: '100%', minHeight: '100vh'}}>
      <Header />
      <Index />
      <Footer />
    </div>

  )
}
