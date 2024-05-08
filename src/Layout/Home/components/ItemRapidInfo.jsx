/* eslint-disable react/prop-types */

export default function ItemRapidInfo({
    data = [], // --> La data con la info
    x=0, //--> El index al que tiene que acceder
    icon='../../../../public/svg/icons/bitcoin.svg',
    title,
  }) {
  return (
    <div className='rapid_icons_general rapid_icons_c1'>
      <div className='rapid_icons_general_c1'>
        <div className='rapid_icons_general_c1_name'>
          <span>{data[x]?.name ? data[x]?.name : 'cargando ...'}</span>
        </div>
        <div className='rapid_icons_general_c1_price'>
          <h3 style={{margin: 0}}>{data[x]?.current_price ? data[x]?.current_price : '0.000'}</h3>
          <span style={{color: data[x]?.price_change_percentage_24h < 0 ? 'rgb(255, 100,100)' : 'rgb(100,255,180)'
          }}>{`${data[x]?.price_change_percentage_24h ? data[x]?.price_change_percentage_24h : '0.0%'}`}</span>
        </div>
      </div>
      <div className='rapid_icons_general_2'>
        <span className='rapid_icons_general_2-icon'>
          <img style={{width: 35, height: 35}} src={icon} alt={title} title={title} />
        </span>
      </div>
    </div>
  )
}
