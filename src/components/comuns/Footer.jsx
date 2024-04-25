import React from 'react'

export default function Footer() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: 20, marginBottom: '-2.5rem'}}>
      <div>
        @2024 Developed by Qsoft Development Team ❤️ for Polaris Web3 ✩
      </div>
      <div style={{display: 'flex', gap: 30}}>

        <a href='https://kabila.app'><span style={{cursor: 'pointer'}}>Kabila Marketplace</span></a>
        <a href='https://cusoft.tech'><span style={{cursor: 'pointer'}}>Qsoft Blog</span></a>
        <a href='https://docs.polarisweb3.org'><span style={{cursor: 'pointer'}}>Documentation</span></a>
      </div>
    </div>
  )
}
