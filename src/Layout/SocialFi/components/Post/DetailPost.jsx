/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { useParams } from 'react-router'
import Header from '../../../../components/comuns/Header'
import Footer from '../../../../components/comuns/Footer'
import { Context } from '../../../../context/GlobalContextProvider'
import Markdown from 'react-markdown'
import '../../styles/detailPosts.css'
import formatDateHive from '../../functions/formatDateHive'
import { colors } from '../../../../constants/colors'
import ImportantsButons from './ImportantsButons'

export default function DetailPost() {
  const { id } = useParams() 

  const { socialFi } = useContext(Context)
  const element = socialFi.detailPost

  return (
    <div className='container'>
      <Header text={`${element.title.slice(0,50)}...`}/>

      <div id='detail_post_hive' className='detail_post_hive'>
        <section className='detail_post_hive_c1'>
          <div className='detail_post_hive_c1_presentationPost'>
            <h3>{element.title}</h3>
            <h5 style={{color: colors.borderColor}}>Selected by Polaris ( BETA )</h5>

            <div className='detail_post_hive_c1_presentationPost_useInfo'>
              <img src='../../../../../public/img/user_image.png' alt='' title=''/>

              <div>
                <h4>{element?.author?.charAt(0).toUpperCase() + element?.author?.slice(1,20)}</h4>
                <span>·</span>
                <p>12 min read</p>
                <span>·</span>
                <p>{formatDateHive(element?.last_update)}</p>
              </div>
            </div>

            <div className='socialDefi_posts_c1_basicnInfoRepercution_c2'>
              <div>
                <section>
                  <img src="../../../../../public/svg/icons/like.svg" alt="" title=''/>
                  <span>{element.active_votes ? element.active_votes.length : 0}</span>
                </section>

                <section>
                  <img src="../../../../../public/svg/icons/comment.svg" alt="" title=''/>
                  <span>{element.replies ? element.replies.length : 0}</span>
                </section>
              </div>

              <div>
                <ImportantsButons />
              </div>
            </div>
          </div>

          <div id='detail_post_hive_c1_post' className='detail_post_hive_c1_post'>
            <Markdown>
              {element.body}
            </Markdown>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}