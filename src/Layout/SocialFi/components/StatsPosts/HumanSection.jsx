import PolarAreaChart from '../../../../components/charts/PolarAreaChart';
import './humanSection.css'

export default function HumanSection({
  dataChart = [1005, 1009, 1000, 999, 1006, 990], 
  labelsChart = ['A', 'B', 'C', 'D', 'E', 'F']
}) {

  return (
    <div className='statsposts_human_section_calculator'>
      
      <div className='statsposts_human_section_calculator_c1'>
        <header className='statsposts_human_section_calculator_c1_header'>
          <h4>Principal Reactions</h4>
        </header>

        <main className='statsposts_human_section_calculator_c1_bento'>
          <div className='statsposts_human_section_calculator_c1_bento_item1 statsposts_human_section_calculator_c1_bento_item'>
            Persona 1
          </div>

          <div className='statsposts_human_section_calculator_c1_bento_item2 statsposts_human_section_calculator_c1_bento_item'>
            <PolarAreaChart dataChart={dataChart} labelsChart={labelsChart} />
          </div>

          <div className='statsposts_human_section_calculator_c1_bento_item3 statsposts_human_section_calculator_c1_bento_item'>
            Persona 2
          </div>
        </main>
      </div>


      <div className='statsposts_human_section_calculator_c2'>
        <section className='statsposts_human_section_calculator_c2_postlife'>
          <header>
            <h3>
              Post Life
            </h3>
          </header>

          <span className='statsposts_human_section_calculator_c2_time'>Las 24H</span>

          <span className='statsposts_human_section_calculator_c2_state'>estado</span>

          <div className='statsposts_human_section_calculator_c2_bento'>
            <div className='statsposts_human_section_calculator_c2_itembento'>
            
            </div>
            
            <div className='statsposts_human_section_calculator_c2_itembento'>
            
            </div>
            
            <div className='statsposts_human_section_calculator_c2_itembento'>
            
            </div>
          </div>
        </section>

        <section className='statsposts_human_section_calculator_posthuman'>
          
        </section>
      </div>
    
    </div>
  )
}
