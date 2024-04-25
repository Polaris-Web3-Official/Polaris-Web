import '../styles/bestsProjects.css'
import { fetchData } from '../../../functions/fetchData'
import { useState, useEffect } from 'react'

export default function BetsProjects({url}) {
  const [state, setState] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const searsh = async () => {
    try{
      setLoading(true)
      const data = await fetchData(url = 'https://polarisapp.tech/api/polaris/magic_eden')
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
          state.map(item => {
            return (
              <div className='best_projects_c1_container' key={item.symbol} title='Polaris Web3 - Top Projects NFT'>
                <img src={item.image} alt={`Polaris Web3 - ${item.name}`} title={`Polaris Web3 - ${item.name}`}/>

                <span>{item.name}</span>

                <span>Flor price: {item.floorPrice}</span>

                <span>Volume All{item.volumeAll}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

/*
  {
    "symbol": "famous_fox_federation",
    "name": "Famous Fox Federation",
    "description": "1",
    "image": "https://creator-hub-prod.s3.us-east-2.amazonaws.com/famous_fox_federation_pfp_1679672949828.gif",
    "floorPrice": 13860000000,
    "volumeAll": 1359185.8236587578,
    "hasCNFTs": false
  }
*/