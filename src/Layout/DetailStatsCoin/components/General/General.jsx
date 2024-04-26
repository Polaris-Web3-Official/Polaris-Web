import React from 'react'
import '../../styles/general.css'

export default function General({item}) {
  const data = item[0];
  const charData = item[1];

  return (
    <div className='general_detailStats'>
      <nav className='header_general_detailStats'>
        <div>
          <div>
            <img src="" alt="" title=''/>

            <div>
              <span></span>
              <span></span>
            </div>
          </div>

          <div>
            <div>
              <img src="" alt="" title=''/>
            </div>

            <div>
              <img src="" alt="" title=''/>
            </div>
          </div>
        </div>

        <div>

        </div>

        <div></div>
      </nav>

      <div className='general_detailStats_c1'>
        <div>
          <span></span>
          <span></span>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className='general_detailStats_c2'></div>
    </div>
  )
}
