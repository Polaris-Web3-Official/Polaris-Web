/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//Importaciones nativas
import { useEffect, useState } from 'react'

//Importando los colores
import { colors } from '../../../constants/colors';

//Importando estilos
import '../styles/details.css'

//Importaciones externas 
import Feed from './Feed/Feed';
import Market from './Market/Market';
import General from './General/General';
import { fetchData } from '../../../functions/fetchData';

export default function Index({coinId='bitcoin'}) {  //Por defecto la x(coin) es bitcoin
  const [chartData, setChartData] = useState();
  const [data, setData] = useState();

  const [error, setError] = useState(); //Se utiliza para renderizar algo si ocurre un error
  const [loading, setLoading] = useState(); //Se utiliza para renderizar algo miestras la data se procesa

  //Buscamos la data que mostrara el grafico en coinguecko (temporal)
  //En la v1.0 esta data estara en la api interna de Polaris
  const searshChartData = async ()=>{
    const data = await fetchData(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily&precision=3`)
    setChartData(data)
  }

  //Buscamos la data general de la x(coin)
  //Tambien temporal por el mismo motivo de arriba 
  const searshGlobalData = async ()=>{
    const data = await fetchData(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
    setData(data)
  }

  //Buscamos la data
  useEffect(()=>{
    try {
      setLoading(true)
      searshChartData();
      searshGlobalData();
    } catch(e){
      setError(e)
      console.log('ocurrio un error en alguna de las funciones que busca la data sobre la criptomonada especificada, esta criptomoneda es: ' + coinId);
      console.log(e);
    } finally {
      setLoading(false)
    }
  }, [])

  //Gyardamos en un array en el index 0 la data global
  //y en el index 1 la data del grafico.
  const dataCompleted = [data, chartData]
  
  console.log(dataCompleted);

  return (
    <div className='detail_coin'>

      <div className='detail_coin_c1'>
        <General item={dataCompleted}/>
      </div>

      <div className='detail_coin_c2'>
        <Market item={dataCompleted}/>
      </div>

      <div className='detail_coin_c3' style={{position: 'relative'}}>
        <div style={{
          zIndex: 999, 
          marginBottom: -10,
          position: 'relative',
          display: 'flex', 
          gap: 10, 
          backgroundColor: colors.mainBackgroundColor3, 
          padding: '0.5rem', 
          borderRadius: '0.5rem'

        }}>
          <span>📢</span>
          <span>Web3 Community on X</span>
        </div>
        <Feed item={dataCompleted}/>
      </div>
    </div>
  )
}
