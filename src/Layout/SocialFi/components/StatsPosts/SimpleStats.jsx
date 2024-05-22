import { useEffect } from 'react';
import LineChart from '../../../../components/charts/LineChart'
import './simpleStats.css'

export default function SimpleStats({icon, title, color, data = [], id}) {
  const elements = document.getElementsByClassName('statsposts_simple_stats_chart');

 useEffect(()=>{
  setTimeout(()=>{
    Array.from(elements)?.map(element => {
      const c = element.children;
      const c1 = c[0].children;
      const c2 = c1[0].children;
      const c3 = c2[0].children;
      const c4 = c3[0].children;
      c4[0].style.display = 'none'
      c4[2].style.display = 'none'
      const c5 = c4[1].children;
      const c6 = c5[0].children;
      c6[0].style.width = '100%';
      c6[1].style.width = '100%';
    });
  }, 1000)

 }, [elements, data]) 

  
  return (
    <div className='statsposts_simple_stats'>
      <div className='statsposts_simple_stats_header'>
        <div style={{backgroundColor: color}}>
          <img src={icon} alt='' title=''/>
        </div>

        <span>{title}</span>
      </div>

      <div className='statsposts_simple_stats_mid'>
        <h3>
          {data.comments}
        </h3>

        <span>
           / total
        </span>
      </div>

      <div style={{width: '100%'}}>
        <span className='statsposts_simple_stats_state'>
          {data.state}
        </span>
      </div>

      <div className='statsposts_simple_stats_chart'>
        <LineChart 
          id={id}
          dataChart={data.chart}
        />
      </div>
    </div>
  )
}
