import { useEffect, useState } from "react";
import { colors } from "../../../constants/colors";

export default function ItemNavBar({url, target='_self', icon, line='example'}) {
  const [focus, setFocus] = useState(false)

  let page = window.location.pathname;
  console.log(page);

  const getPage = ()=>{
    if (`/${line.toLowerCase()}` === page) {
      console.log(`El patname es ${page} y el nombre es ${line.toLowerCase()}`);
      setFocus(true)
    } else {
      setFocus(false)
    }
  }

  useEffect(()=>{
    getPage()
    console.log('se ejecuto getPage()');
  }, [page])

  return (
    <a href={url} target={target} style={{textDecoration: 'none'}}>
      <li style={{
          padding: '0.675rem 0.8rem 0.675rem 1rem', 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: "center", 
          gap: 10,
          borderRadius: '0.9375rem',
          cursor: 'pointer',
          userSelect: 'none',
          margin: 10,
          backgroundColor: focus ? colors.mainBackgroundColor3 : 'transparent'
        }}>
        <div style={{
            minWidth: '2rem', 
            minHeight: '2rem', 
            borderRadius: '0.75rem', 
            display: 'grid',
            placeItems: 'center'
          }}>

          {icon}
        </div>

        <div style={{marginTop: 3}}>
          <span style={{fontSize: '1rem', fontWeight: 500, color: colors.paragraphColor}}>{line}</span>
        </div>
      </li>
    </a>
  )
}