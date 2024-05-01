import React from 'react'
import './style/footer.css'

export default function Footer() {

  return (
    <div style={{
        display: 'flex', 
        width: '100%', 
        padding: 20, 
        gap: '1rem',
        marginBottom: '-2.5rem', 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
      }}>
      <span style={{textAlign: 'center'}}>
        @2024 Developed by Qsoft Development Team ❤️ for Polaris Web3 ✩
      </span>
      <a href='https://kabila.app'><span style={{cursor: 'pointer', fontSize:'1rem'}}>Kabila Marketplace</span></a>
      <a href='https://cusoft.tech'><span style={{cursor: 'pointer', fontSize:'1rem'}}>Qsoft Blog</span></a>
      <a href='https://docs.polarisweb3.org'><span style={{cursor: 'pointer', fontSize:'1rem'}}>Documentation</span></a>

    </div>
  )
}
