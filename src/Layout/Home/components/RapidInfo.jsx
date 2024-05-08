//Importaciones nativas
import { useEffect, useState } from 'react'

//importando estilos
import '../styles/rapidIcons.css'

//importaciones externas
import ItemRapidInfo from './ItemRapidInfo'
import { fetchData } from '../../../functions/fetchData'
import { POLARIS_API } from '../../../constants/keys'


export default function RapidInfo() {
  const [data, setData] = useState([])

  const searsh = async ()=>{
    const data = await fetchData(POLARIS_API.top)
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
            title={'Polaris Web3 ~ Bitcoin'}
          />

          <ItemRapidInfo
            data={data}
            x={1}
            icon='../../../../public/svg/icons/ethereum.svg'
            title={'Polaris Web3 ~ Ethereum'}
          />
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
          <ItemRapidInfo
            data={data}
            x={2}
            icon='../../../../public/svg/icons/usdt.svg'
            title={'Polaris Web3 ~ Tether'}
          />

          <ItemRapidInfo
            data={data}
            x={3}
            icon='../../../../public/svg/icons/binance.svg'
            title={'Polaris Web3 ~ Binance'}
          />
        </div>
      </div>
    </div>
  )
}
