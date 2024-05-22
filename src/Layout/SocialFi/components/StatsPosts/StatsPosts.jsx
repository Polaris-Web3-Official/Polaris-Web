import { useContext, useEffect, useState } from 'react'
import NavBar from '../../../../components/navigation/NavBar/NavBar'
import NavBarTo from '../../../../components/navigation/NavBarTo/NavBarTo'
import Header from '../../../../components/comuns/Header'
import Footer from '../../../../components/comuns/Footer'
import './statsPosts.css'
import { Context } from '../../../../context/GlobalContextProvider'
import SimpleStats from './SimpleStats'
import GeneralChart from './GeneralChart'
import SimpleFooter from './SimpleFooter'
import HumanSection from './HumanSection'
import { counterVotes } from './functions/counterVotes'
import Loading from '../../../../components/comuns/Loading'


export default function StatsPosts() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [principalVoters, setPrincipalVoters] = useState([])

  const { socialFi } = useContext(Context)
  const element = socialFi.statsPosts;


  async function searshData(){
    setLoading(true)
    const votesCounter = await counterVotes(element) 
    setData(votesCounter)
    setLoading(false)
  }

  useEffect(()=>{
    searshData();
  }, [element])

  if (loading) {
    return (
      <div>
        <NavBar />
          <Header />
            <Loading />
          <Footer />
        <NavBarTo />
      </div>
    )
  }

  return (
    <div className='container'>
    <NavBar />
      <Header />
        <div className='socialfi_stats_posts'>
          
          <div className='socialfi_stats_posts_c1'> 

            <section className='socialfi_stats_posts_c1_bento'>
              <SimpleStats 
                title={'Likes'}
                color={'var(--testColor21)'}
                icon={'https://cusoft.tech/wp-content/uploads/2024/05/thumbs-up.svg'}
                id={'likes'}
                data={
                  {
                    comments: data?.positiveVotes?.votes,
                    state: 'Normal',
                    chart: data?.positiveVotes?.chart,
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
                    comments: data?.comments?.votes,
                    state: 'Normal',
                    chart: [
                      { time: '2018-12-22', value: 27.67 },
                      { time: '2018-12-23', value: 27.67 },
                      { time: '2018-12-24', value: 27.67 },
                      { time: '2018-12-25', value: 27.67 },
                      { time: '2018-12-26', value: 27.67 },
                      { time: '2018-12-27', value: 27.67 },
                      { time: '2018-12-28', value: 27.67 },
                      { time: '2018-12-29', value: 27.67 },
                      { time: '2018-12-30', value: 27.67 },
                      { time: '2018-12-31', value: 27.67 },
                    ]
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
                    comments: data?.negativeVotes?.votes,
                    state: 'Normal',
                    chart:  [
                      { time: '2018-12-22', value: 27.67 },
                      { time: '2018-12-23', value: 27.67 },
                      { time: '2018-12-24', value: 27.67 },
                      { time: '2018-12-25', value: 27.67 },
                      { time: '2018-12-26', value: 27.67 },
                      { time: '2018-12-27', value: 27.67 },
                      { time: '2018-12-28', value: 27.67 },
                      { time: '2018-12-29', value: 27.67 },
                      { time: '2018-12-30', value: 27.67 },
                      { time: '2018-12-31', value: 27.67 },
                    ],
                  }
                }
              />
            </section>

            <section className='socialfi_stats_posts_c1_activity'>
              <GeneralChart data={data?.activity}/>
            </section>

            <section className='socialfi_stats_posts_c1_footer'>
              <SimpleFooter />
            </section>
          </div>


          <div className='socialfi_stats_posts_c2'>
            <HumanSection 
              dataChart={data?.principalVoters.principalVotersValue.slice(0,10)}
              labelsChart={data?.principalVoters.principalVotersName.slice(0,10)}
            />
          </div>
        
        </div>
      <Footer />
    <NavBarTo />
    </div>
  )
}
