import { Context } from '../../../../context/GlobalContextProvider';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/posts.css'
import { colors } from '../../../../constants/colors'
import formatDateHive from '../../functions/formatDateHive';

import markdownIt from 'markdown-it';
import { convert } from 'html-to-text';
import { searshTextinBody } from '../../functions/searshTextinBody';
import ImportantsButons from './ImportantsButons';

const md = markdownIt()

export default function Post() {

  const { socialFi, sesionUser } = useContext(Context)

  return (
    <div className='socialDefi_posts'>
      {/*Buscador de los Posts*/}
      <div className='socialDefi_posts_inputSearsh'>
        <form className='socialDefi_posts_inputSearsh_form' action="" name='' id='' title='' onSubmit={(x)=>{ x.preventDefault(); socialFi.setSearch(x.target[0].value)}}>
          <input type="text" name="" id="" title='' alt='' placeholder='Searsh one topic in Hive Blockchain'/>
          <button type="submit" title='' name='' id=''>
            <img src='../../../../../public/svg/icons/searsh.svg' alt='' title=''/>
          </button>
        </form>

        <div className='socialDefi_posts_inputSearsh_userInfoTest'>{/*Es un test, poco funcional*/}
          <div className='socialDefi_posts_inputSearsh_userInfoTest_write'>
            <img src="../../../../../public/svg/icons/write.svg" alt="" title=''/>
            <span>Write</span>
          </div>

          <div className='socialDefi_posts_inputSearsh_userInfoTest_userPhoto'>
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" title=''/>
          </div>
        </div>
      </div>

      {/*Informacion basica sobre el usuario X*/}
      {Array.isArray(socialFi.posts) && socialFi.posts.map((item, index)=>{
        const json = JSON.parse(item?.json_metadata)
        const body = convert(md.render(item?.body?.slice(0,420)))
        const bodyx = searshTextinBody(body)

        return (
          <div key={item?.post_id} className='socialDefi_posts_c1'>
            <div className='socialDefi_posts_c1_basicInfoUser'>
              <img src='../../../../../public/img/user_image.png' alt="" title=''/>
              <span>·</span>
              <span>{item?.author?.charAt(0).toUpperCase() + item?.author?.slice(1,20)}</span>
              <span>·</span>
              <p>{formatDateHive(item?.last_update)}</p>

              {/*Si el usuario conecta su wallet y el usuario la wallet tiene un NFT se hace la verificacion*/}
              {
                sesionUser.isMember && (
                  <div className='socialDefi_posts_c1_basicInfoUser_isMember'>
                    <img src="../../../../../public/svg/icons/star.svg" alt="" title=''/>
                    <span>Polaris VIPs Only</span>
                  </div>
                )
              }
            </div>

            {/*Informacion basica sobre el Post*/}
            <Link to={`detailPost/${item?.post_id}`} onClick={()=>{
              socialFi.setDetailPosts(item)
            }}>
              <div className='socialDefi_posts_c1_basicInfoPosts'>
                <div className='socialDefi_posts_c1_basicInfoPosts_info'>
                  <h3>{item?.title?.slice(0,50)} ...</h3>
                  <p>{bodyx}.</p>
                </div>

                <div className='socialDefi_posts_c1_basicInfoPosts_info_img'>
                  <img src={json?.image?.includes('https://files.peakd.com') ||  
                            json?.image?.includes('https://images.ecency.com') || 
                            json?.image === ''  
                            ? json?.image : '../../../../../public/img/hive_image.jpeg'} alt="" title=''/>
                </div>
              </div>
            </Link>

            {/*Informacion sobre la X repercusion del Post*/}
            <div className='socialDefi_posts_c1_basicnInfoRepercution'>
              <div className='socialDefi_posts_c1_basicnInfoRepercution_c1'>
                <span style={{backgroundColor: colors.borderColor, padding: '0.1rem 1rem', borderRadius: '0.5rem'}}>
                  {socialFi?.search?.charAt(0).toUpperCase() + socialFi?.search?.slice(1, 100)}
                </span>

                <span>
                  {item?.pending_payout_value}
                </span>

                <span>
                  Selected for Polaris Beta
                </span>
              </div>

              <div className='socialDefi_posts_c1_basicnInfoRepercution_c2'>
                <ImportantsButons item={item}/>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}
