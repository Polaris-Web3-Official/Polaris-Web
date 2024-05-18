/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
import '../../styles/importantsButtons.css';
import Alert from '@mui/material/Alert';
import { colors } from '../../../../constants/colors';
import { Context } from '../../../../context/GlobalContextProvider';
import { Link } from 'react-router-dom';


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
        <img src="../../../../../public/svg/icons/bookmark.svg" alt="" title=''/>
      </span>
      
      <span onClick={()=> window.open(`https://twitter.com/intent/tweet?text=Check%20this%20:%20${url}`, '_blank')}>
        <img src="../../../../../public/svg/icons/share2.svg" alt="" title=''/>
      </span>

      <span onClick={()=> 
        socialFi.setStatsPost(detailPost)
      }>
        <Link  to={`/app/socialfi/statsPost/${detailPost?.post_id}`}>
          <img src="../../../../../public/svg/icons/piechart.svg" alt="" title=''/>
        </Link>
      </span>

      <span onClick={()=> setstate(!state)}>
        <img src="../../../../../public/svg/icons/ellipsis.svg" alt="" title=''/>
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
