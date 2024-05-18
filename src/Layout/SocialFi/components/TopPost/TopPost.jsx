import { useContext } from 'react'
import { Context } from '../../../../context/GlobalContextProvider'
import './topPost.css'
import { Link } from 'react-router-dom';


export default function TopPost() {
  const { socialFi } = useContext(Context)

  console.log(socialFi.posts);

  return (
    <div className='socialfi_top_posts'>
      {
        socialFi?.posts?.sort((a, b)=>{
          b.active_votes.length - a.active_votes.length
        }).slice(0,4).map((item, index)=>{
          return (
            <Link to={`detailPost/${item?.post_id}`} key={index}>
              <div onClick={()=>{
                socialFi.setDetailPosts(item)
              }}>
                <h4>
                  {item?.title}
                </h4>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
