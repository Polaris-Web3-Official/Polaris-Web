import '../styles/socialFi.css'
import Post from './Post/Post'
import TopPost from './TopPost/TopPost'
import RecomendedTopics from './RecomendedTopics/RecomendedTopics'

export default function Index() {
  return (
    <div className='bento_socialfi'>
      <div className='bento_socialfi_c1'>
        <Post />
      </div>

      <div className='bento_socialfi_c2'>
        <div className='bento_socialfi_c2_topPost'>
          <RecomendedTopics />
        </div>

        <div className='bento_socialfi_c2_recommendedTopics'>
          <TopPost />
        </div>
      </div>
    </div>
  )
}
