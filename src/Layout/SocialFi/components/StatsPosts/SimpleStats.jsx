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

 }, [elements]) 

  
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
           / hour
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
          dataChart={
            [
            { time: '2018-12-22', value: 32.51 },
            { time: '2018-12-23', value: 31.11 },
            { time: '2018-12-24', value: 27.02 },
            { time: '2018-12-25', value: 27.32 },
            { time: '2018-12-26', value: 25.17 },
            { time: '2018-12-27', value: 28.89 },
            { time: '2018-12-28', value: 25.46 },
            { time: '2018-12-29', value: 23.92 },
            { time: '2018-12-30', value: 22.68 },
            { time: '2018-12-31', value: 22.67 },
          ]}
        />
      </div>
    </div>
  )
}
