import React from 'react'
import '../styles/topCriptos.css'
import { topCoinsExample } from '../../../data/topCoinsExample'

export default function TopCriptos() {
  return (
    <div>
      <nav>
        
      </nav>

      <div>
        <div>
          {
            topCoinsExample.map((item, index)=>{
              return (
                <div key={item.id}>
                  {item.name}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
