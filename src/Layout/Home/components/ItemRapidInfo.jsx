export default function ItemRapidInfo({data = [], x=0, icon='../../../../public/svg/icons/bitcoin.svg'}) {
  return (
    <div className='rapid_icons_general rapid_icons_c1'>
      <div className='rapid_icons_general_c1'>
        <div className='rapid_icons_general_c1_name'>
          <span>{data[x]?.name}</span>
        </div>
        <div className='rapid_icons_general_c1_price'>
          <h3 style={{margin: 0}}>{data[x]?.current_price}</h3>
          <span style={{color: data[x]?.price_change_percentage_24h < 0 ? 'rgb(255, 100,100)' : 'rgb(100,255,180)'
          }}>{`${data[x]?.price_change_percentage_24h}`}</span>
        </div>
      </div>
      <div className='rapid_icons_general_2'>
        <span className='rapid_icons_general_2-icon'>
          <img style={{width: 35, height: 35}} src={icon} alt="" title='' />
        </span>
      </div>
    </div>
  )
}
