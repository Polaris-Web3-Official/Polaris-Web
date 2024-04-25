import React, { useEffect, useState } from 'react'
import '../styles/rapidIcons.css'
import { fetchData } from '../../../functions/fetchData'
import ItemRapidInfo from './ItemRapidInfo'

const url = 'https://polarisapp.tech/api/polaris/top'

export default function RapidInfo() {
  const [data, setData] = useState([])

  const searsh = async ()=>{
    const data = await fetchData(url)
    setData(data.slice(0,5))
  }

  useEffect(()=>{
    searsh();
  }, [])

  console.log(data);

  return (
    <div>
      <div style={{display: 'flex', width: '100%', minHeight: '3rem', gap: '1.5rem', justifyContent: 'center'}}>
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
  )
}
