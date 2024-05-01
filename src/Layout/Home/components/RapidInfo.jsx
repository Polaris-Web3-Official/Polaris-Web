import React, { useEffect, useState } from 'react'
import '../styles/rapidIcons.css'
import { fetchData } from '../../../functions/fetchData'
import ItemRapidInfo from './ItemRapidInfo'
export default function RapidInfo() {
  const [data, setData] = useState([])

  const searsh = async ()=>{
    const data = await fetchData('https://polarisapp.tech/api/polaris/top')
    console.log('data');
    console.log(data);
    setData(data.slice(0,5))
  }

  useEffect(()=>{
    searsh();
  }, [])

  return (
    <div>
      <div className='rapidInfoX' style={{display: 'flex', flexWrap: 'wrap', width: '100%', minHeight: '3rem', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
          <ItemRapidInfo
            data={data}
            x={0}
            icon='../../../../public/svg/icons/bitcoin.svg'
          />

          <ItemRapidInfo
            data={data}
            x={1}
            icon='../../../../public/svg/icons/ethereum.svg'
          />
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
          <ItemRapidInfo
            data={data}
            x={2}
            icon='../../../../public/svg/icons/usdt.svg'
          />

          <ItemRapidInfo
            data={data}
            x={3}
            icon='../../../../public/svg/icons/binance.svg'
          />
        </div>
      </div>
    </div>
  )
}
