import '../styles/headerItem.css'

export default function HeaderItem({ title, icon, color }) {
  return (
    <div style={{ backgroundColor: color }} className='community_mental_friends_header_item'>
      <img src={icon} alt="" title=''/>
      <span>{title}</span>
    </div>
  )
}
