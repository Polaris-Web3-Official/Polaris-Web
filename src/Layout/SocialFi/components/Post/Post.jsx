import { Context } from '../../../../context/GlobalContextProvider';
import { useContext, memo } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/posts.css'
import { colors } from '../../../../constants/colors'
import formatDateHive from '../../functions/formatDateHive';

import markdownIt from 'markdown-it';
import { convert } from 'html-to-text';
import { searshTextinBody } from '../../functions/searshTextinBody';
import ImportantsButons from './ImportantsButons';
import Loading from '../../../../components/comuns/Loading';

const md = markdownIt()

function Post() {

  const { socialFi } = useContext(Context)

  return (
    <div className='socialDefi_posts'>
      {/*Buscador de los Posts*/}
      <div className='socialDefi_posts_inputSearsh'>
        <form className='socialDefi_posts_inputSearsh_form' action="" name='' id='' title='' onSubmit={(x)=>{ x.preventDefault(); socialFi.setSearch(x.target[0].value)}}>
          <input type="text" name="" id="" title='' alt='' placeholder={socialFi.search}/>
          <button type="submit" title='' name='' id=''>
            <img src='../../../../../public/svg/icons/searsh.svg' alt='' title=''/>
          </button>
        </form>
      </div>

      {/*Informacion basica sobre el usuario X*/}
      {Array.isArray(socialFi.posts) && socialFi.posts.map((item)=>{
        const json = JSON.parse(item?.json_metadata)
        const body = convert(md.render(item?.body?.slice(0,420)))
        const bodyx = searshTextinBody(body)

        return (
          <div key={item?.post_id} className='socialDefi_posts_c1'>
            <div className='socialDefi_posts_c1_basicInfoUser'>
              <img src='../../../../../public/img/user_image.png' alt="" title=''/>
              <span>·</span>
              <span style={{color: 'var(--ButtonColor)'}}>{item?.author?.charAt(0).toUpperCase() + item?.author?.slice(1,20)}</span>
              <span>·</span>
              <p style={{color: 'var(--paragraphColor2)'}}>{formatDateHive(item?.last_update)}</p>
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

                  <img src={
                    json?.image?.length >= 1 ? 
                    json?.image[0] 
                    : 'https://cusoft.tech/wp-content/uploads/2024/04/Imagen1.webp' 
                  } 
                    alt="" title=''/>
                </div>
              </div>
            </Link>

            {/*Informacion sobre la X repercusion del Post*/}
            <div className='socialDefi_posts_c1_basicnInfoRepercution'>
              <div className='socialDefi_posts_c1_basicnInfoRepercution_c1'>
                <span style={{backgroundColor: colors.borderColor, padding: '0.1rem 1rem', borderRadius: '0.5rem'}}>
                  {socialFi?.search?.slice(0, 10)}
                </span>

                <span>
                  {item?.pending_payout_value}
                </span>

                <span style={{
                  color: 'var(--paragraphColor2)'
                }}>
                  Selected for Polaris Beta
                </span>
              </div>

              <div className='socialDefi_posts_c1_basicnInfoRepercution_c2'>
                <ImportantsButons 
                  url={`hive.blog${item?.url}`} 
                  detailPost={item}
                />
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default memo(Post)