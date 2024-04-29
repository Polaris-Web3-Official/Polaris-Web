import { useEffect, useState } from 'react';
import '../../styles/importantsButtons.css';
import { Alert, IconButton } from '@mui/joy';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import InfoIcon from '@mui/icons-material/Info';
import { colors } from '../../../../constants/colors';

export default function ImportantsButons({ item }) {
  const [state, setstate] = useState(false);

  useEffect(()=>{
    if(state){
      setTimeout(()=>{
        setstate(false)
      }, 4000)
    }
    console.log('se ejecuto el useefect');
  }, [state])

  return (
    <div className='important_buttons_socialFi'>
      <span id='bookMark' onClick={()=> setstate(!state)}>
        <img src="../../../../../public/svg/icons/bookmark.svg" alt="" title=''/>
      </span>
      
      <span>
        <img src="../../../../../public/svg/icons/share2.svg" alt="" title=''/>
      </span>

      <span>
        <img src="../../../../../public/svg/icons/piechart.svg" alt="" title=''/>
      </span>

      <span>
        <img src="../../../../../public/svg/icons/ellipsis.svg" alt="" title=''/>
      </span>

      <div style={{
          position: 'absolute', 
          width: '30rem', 
          height: '4rem', 
          top: '10rem',
          left: '10rem',
          transition: 'all .5s',
          opacity: state ? '1' : '0',
        }}>
        {
          state && (
            <Alert 
              key={'Neutral'}
              sx={{ alignItems: 'flex-start', backgroundColor: colors.mainBackgroundColor3, width: '100%', height: '100%' }}
              startDecorator={<InfoIcon onClick={()=> console.log('ojo')}/>}
              variant="soft"
              color={'neutral'}
            />
          )
        }
      </div>
    </div>
  );
}
