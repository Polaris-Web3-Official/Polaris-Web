/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//Importaciones nativas
import { useState, useEffect } from 'react'

//Importando los estilos
import '../styles/bestsProjects.css'

//Importaciones externas
import LineChart from '../../../components/charts/LineChart';
import formatStr from '../../../functions/formatStr';
import formatMarketCap from '../../../functions/formatMarketCap';
import { fetchData } from '../../../functions/fetchData'
import { POLARIS_API } from '../../../constants/keys'

export default function BetsProjects({url = `${POLARIS_API.magiceden}`}) {
  const [state, setState] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const searsh = async () => {
    try{
      setLoading(true)
      const data = await fetchData(url)
      setState(data)
    } catch(e){
      setError(e)
      console.log(e);
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    searsh();
  }, [])

  console.log(state);

  return (
    <div className='best_projects'>
      <div className='best_projects_header'>

      </div>

      <div className='best_projects_c1'>
        {
          state?.map((item, index )=> {
            return (
              <div className='best_projects_c1_container' key={index} title={`Polaris Web3 - ${item.name}`}>
                <img src={item.image} alt={`Polaris Web3 - Image/${item.name}`} title={`Polaris Web3 - Image/${item.name}`}/>

                <h4>{item.name?.slice(0,33)}</h4>

                <span>Volume All: {formatMarketCap(formatStr(item.volumeAll, 80))}</span>

                <div style={{position: 'relative', width: '30%'}} title={`Polaris Web3 - Chart/${item.name}`}>
                  <div className='best_projects_c1_container_chart'>
                    <LineChart 
                      data={{
                        labels: ['', '', '', '', '', '', ''],
                        datasets: [
                          {
                            label: 'Bitcoin',
                            data: [11,17,13,14,9,5,11],
                            borderColor: 'rgb(236,225,147)',
                            tension: 0.40,
                            backgroundColor: 'rgb(236,225,147)',
                            borderWidth: 1,
                            hoverBorderWidth: 5,
                          },
                        ]
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}