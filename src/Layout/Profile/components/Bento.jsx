//Importando estilos
import '../style/profile.css'

export default function Bento() {
  return (
    <div className='bento_profile'>
      <div className='bento_profile_c1'></div>

      <div className='bento_profile_c2'>
        <div className='bento_profile_c2_presentation'></div>
        <div className='bento_profile_c2_profileBasicInfo'></div>
        <div className='bento_profile_c2_profileMaxInfo'></div>
      </div>

      <div className='bento_profile_c3'>
        <div className='bento_profile_c3_profileSettings'></div>
        <div className='bento_profile_c3_publish'></div>
      </div>
    </div>
  )
}
