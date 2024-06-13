import Content from './components/Content'
import Background from './components/Background'
import { useEffect } from 'react'

export default function Links() {

  useEffect(()=>{
    let root = document.getElementById('root');
    root.style.backgroundColor = '#000';
    root.style.width = '100%';
    root.style.height = '100%';
    root.style.display = 'flex';
    root.style.justifyContent = 'center';
    root.style.alignItems = 'center';

    let links = document.getElementById('links');
    links.parentElement.style.backgroundColor = '#000';
  }, [])
  
  return (
    <div className='links' id='links' style={{ width: '100%', height: '100%', backgroundColor: '#000', overflowX: 'hidden', overflowY: 'auto' }}>
      <Background />  
      <Content />
    </div>
  )
}
