/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import '../../styles/importantsButtons.css';
import Alert from '@mui/material/Alert';
import { colors } from '../../../../constants/colors';
import { Context } from '../../../../context/GlobalContextProvider';


export default function ImportantsButons({url, detailPost}) {
  const [state, setstate] = useState(false);
  const { socialFi } = useContext(Context)

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
        <img src="https://cusoft.tech/wp-content/uploads/2024/05/bookmark.svg" alt="" title=''/>
      </span>
      
      <span onClick={()=> window.open(`https://twitter.com/intent/tweet?text=Check%20out%20this%20post%20on%20@hiveblocks%20that%20is%20super%20interesting%20and%20now%20you%20can%20analyze%20it%20thanks%20to%20@PolarisWeb3.%0A%0A${url}%20`, '_blank')}>
        <img src="https://cusoft.tech/wp-content/uploads/2024/05/share2.svg" alt="" title=''/>
      </span>

      <span onClick={()=> 
        socialFi.setStatsPost(detailPost)
      }>
        <span id='bookMark' onClick={()=> setstate(!state)}>
          <img src="https://cusoft.tech/wp-content/uploads/2024/05/piechart.svg" alt="" title=''/>
        </span>
      </span>

      <span onClick={()=> setstate(!state)}>
        <img src="https://cusoft.tech/wp-content/uploads/2024/05/ellipsis.svg" alt="" title=''/>
      </span>

      <div className='alert_posts'>
        {
          state && (
            <Alert 
              variant="filled" 
              severity="info" 
              style={{
                backgroundColor: colors.borderColor,
              }}
            >
              Available in V1.0
            </Alert>
          )
        }
      </div>
    </div>
  );
}
