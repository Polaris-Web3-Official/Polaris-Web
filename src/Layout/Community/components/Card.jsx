import '../styles/card.css'

export default function Card({img, name}) {
  return (
    <div className='community_card'>
      <img src={img} alt={name} title={name} />
      <p>{name}</p>
    </div>
  )
}
