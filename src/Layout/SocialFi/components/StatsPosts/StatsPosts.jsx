import { useContext } from 'react'
import NavBar from '../../../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../../../components/navigation/NavBarTo/NavBarTo'
import Header from '../../../../components/comuns/Header'
import Footer from '../../../../components/comuns/Footer'
import './statsPosts.css'
import { Context } from '../../../../context/GlobalContextProvider'
import SimpleStats from './SimpleStats'
import GeneralChart from './GeneralChart'
import SimpleFooter from './SimpleFooter'


export default function StatsPosts() {

  const { socialFi } = useContext(Context)
  const element = socialFi.statsPosts;

  return (
    <div className='container'>
    <NavBar />
      <Header />
        <div className='socialfi_stats_posts'>
          
          <div className='socialfi_stats_posts_c1'> 
            <h2>{element?.title?.slice(0,41)} ...</h2>
            <h5>Fecha de creacion del post</h5>

            <section className='socialfi_stats_posts_c1_bento'>
              <SimpleStats 
                title={'Likes'}
                color={'var(--testColor21)'}
                icon={'https://cusoft.tech/wp-content/uploads/2024/05/thumbs-up.svg'}
                id={'likes'}
                data={
                  {
                    comments: '80',
                    state: 'Normal',
                    chart: []
                  }
                }
              />
              
              <SimpleStats 
                title={'Comentarios'}
                color={'var(--ButtonColor2)'}
                icon={'https://cusoft.tech/wp-content/uploads/2024/05/comment.svg'}
                id={'comments'}
                data={
                  {
                    comments: '80',
                    state: 'Normal',
                    chart: []
                  }
                }
              />


              <SimpleStats 
                title={'DisLikes'}
                color={'var(--testColor1)'}
                icon={'https://cusoft.tech/wp-content/uploads/2024/05/thumbs-down.svg'}
                id={'deslikes'}
                data={
                  {
                    comments: '80',
                    state: 'Normal',
                    chart: []
                  }
                }
              />
            </section>

            <section className='socialfi_stats_posts_c1_activity'>
              <GeneralChart />
            </section>

            <section className='socialfi_stats_posts_c1_footer'>
              <SimpleFooter />
            </section>
          </div>


          <div className='socialfi_stats_posts_c2'>
            Human Sectio
          </div>
        
        </div>
      <Footer />
    <NavBarTo />
    </div>
  )
}
