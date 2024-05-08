/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

//importaciones nativas
import React, { useEffect, useState } from 'react'

//Importaciones externas
import { fetchData } from '../../../functions/fetchData'

export default function Transaction({tx, url}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const searsh = async () => {
    try {
      setLoading(true)
      const data = await fetchData(url)
      setData(data)
    } catch(e){
      console.log(e);
      setError(e)
    } finally {
      setLoading(false)
    }
  } 

  useEffect(()=>{
    searsh();
  }, [])

  return (
    <div>
    
    </div>
  )
}
