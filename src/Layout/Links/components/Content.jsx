
import Icon from './Icon'
import Link from './Link'
import { links } from '../data/links'
import '../styles/content.css'

export default function Content() {

  return (
    <div className='links_content'>
      <div className='links_content_info'>
        <img src="https://cusoft.tech/wp-content/uploads/2024/05/P001_PNG-150ppi.png" alt="" title=''/>
        <span>Utility Ecosystem for the Hedera Blockchain.</span>
      </div>

      <div className='links_content_icons'>
        <Icon url={"https://cusoft.tech/wp-content/uploads/2024/06/github-1.svg"} title={"GitHub"}/>
        <Icon url={"https://cusoft.tech/wp-content/uploads/2024/06/twitter.svg"} title={"Twitter"}/>
        <Icon url={"https://cusoft.tech/wp-content/uploads/2024/06/website.svg"} title={"Website"}/>
      </div>

      <div className='links_content_links'>
        {
          links.map((link, index) => (
            <Link 
              key={index} 
              data={link}
            />
          ))
        }
      </div>

      <div className='links_content_footer'>
      
      </div>
    </div>
  )
}
