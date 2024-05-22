import './generalChart.css'
import BarChart from '../../../../components/charts/BarChart'

export default function GeneralChart({data}) {
  return (
    <div className='statsposts_general_chart' id='statsposts_general_chart'>
      <BarChart dataChart={data}/>
    </div>
  )
}