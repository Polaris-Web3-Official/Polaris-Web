import '../styles/link.css'


export default function Link({data}) {
  return (
    <div className='links_link' onClick={() => window.open(data.url, '_blank')}>
      {data.name}
    </div>
  )
}
