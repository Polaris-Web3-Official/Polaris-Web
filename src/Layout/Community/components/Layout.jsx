import '../styles/layout.css'
import { useContext } from 'react'
import { Context } from '../../../context/GlobalContextProvider'
import { data } from '../data/data'

//importando las Apps de cada comunidad
import AppHallgraph from '../Layouts/Hallgraph/app/AppHallgraph'
import AppHiveCuba from '../Layouts/HiveCuba/app/AppHiveCuba'
import AppKabila from '../Layouts/Kabila/app/AppKabila'
import AppV1ps from '../Layouts/V1ps/app/AppV1ps'
import AppMentalFriends from '../Layouts/MentalFriens/app/AppMentalFriends'

export default function Layout() {
  const { cs } = useContext(Context)
  const id = cs.community;

  if (id === '') {
    window.location.href = '/app/community'
  }

  return (
    <div className='community_layout'>
      {
        data.map((item, index) => {
          if (item.id === id) {
            return (
              <div key={index} className='community_layout_container'>
                <div className='community_layout_container_c1'>
                  {
                    id === 'hivecuba' ? (
                      <AppHiveCuba/>
                    ) : id === 'kabila' ? (
                      <AppKabila/>
                    ) : id === 'v1ps' ? (
                      <AppV1ps/>
                    ) : id === 'hallgraph' ? (
                      <AppHallgraph/>
                    ) : id === 'mental_friends' ? (
                      <AppMentalFriends />
                    ) : (
                      <div>App {id}</div>
                    )
                  }
                </div>


                <div className='community_layout_container_c2'>
                  <div className='community_layout_container_c2_banner'>
                    <img src={item.image.banner} alt="" title=''/>
                  </div>

                  <div className='community_layout_container_c2_basicInfo'>
                    <div className='community_layout_container_c2_basicInfo_c1'>
                      <img src={item.image.logo} alt="" title=''/>
                    </div>

                    <div className='community_layout_container_c2_basicInfo_c2'>
                      <div className='community_layout_container_c2_basicInfo_c2_name'>
                        <p>{item.name}</p>
                      </div>

                      <div className='community_layout_container_c2_basicInfo_c2_icons'>
                        <img onClick={()=> window.open(item.links.twitter, '_blank')} 
                        src="https://cusoft.tech/wp-content/uploads/2024/06/twitter.svg" alt="" title=''/>

                        <img onClick={()=> window.open(item.links.discord, '_blank')} 
                          src="https://cusoft.tech/wp-content/uploads/2024/06/discord-5.svg" alt="" title=''/>

                        <img onClick={()=> window.open(item.links.telegram, '_blank')} 
                        src="https://cusoft.tech/wp-content/uploads/2024/06/telegram.svg" alt="" title=''/>
                      </div>
                    </div>
                  </div>

                  <div className='community_layout_container_c2_basicInfo_c3'>
                    {item.description}
                  </div>

                  <div className='community_layout_container_c2_basicInfo_c4'>
                    {item.team.map((teamMember, index) => {
                      return (
                        <div key={index} className='community_layout_container_c2_basicInfo_c4_teamMember'>
                          
                          <div className='community_layout_container_c2_basicInfo_c4_teamMember_c1'>
                            <img style={{objectFit: 'cover', width: '50px', height: '50px'}} src={teamMember.image} alt="" title=''/>
                            
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <p>{teamMember.name.slice(0, 16)} ...</p>
                              
                              <div style={{display: 'flex', gap: '.3rem', height: '25px', alignItems: 'center'}}>
                                <img style={{
                                  width: '18px',
                                  height: '18px',
                                  cursor: 'pointer'
                                }} onClick={()=> window.open(teamMember.social.twitter, '_blank')} 
                                src="https://cusoft.tech/wp-content/uploads/2024/06/twitter.svg" alt="" title=''/>
                              </div>
                            </div>
                          </div>

                          <div className='community_layout_container_c2_basicInfo_c4_teamMember_c2'>
                            {teamMember.description}
                          </div>

                          <div className='community_layout_container_c2_basicInfo_c4_teamMember_c3'>
                            {/*Icons*/}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}
