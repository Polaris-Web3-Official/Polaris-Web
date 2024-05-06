
import { colors } from '@mui/material'
import '../../style/section3.css'
import ItemSection3 from './ItemSection3'

export default function Section3() {

  return (
    <div className='presentation_section3' id='section3'>
      <h3>“Llevando la Web 3 al alcance de un clik”</h3>
      <p style={{color: 'var(--paragraphColor2)'}}>Una plataforma todo en uno <b style={{color: 'var(--paragraphColor)'}}> de codigo abierto </b> para que puedas tomar decisiones con la mejor informacion de tu lado.</p>

       <div className='presentation_section3_carousel'>
        <ItemSection3 
          title={(<p>Estadisticas Criptos en tiempo <b style={{color: 'var(--ButtonColor)'}}>real</b></p>)}
          description={(
            <p  style={{color: 'var(--paragraphColor2)'}}>
              Descubre los precios 
              reales de las criptomonedas 
              mas interesantes del sector y como sacarles la mayor rentabilidad posible.
            </p>
          )}
        />


        <ItemSection3 
          title={(<p>Analisis de las Noticias mas <b style={{color: 'var(--ButtonColor)'}}>impactantes</b> en el mercado</p>)}
          description={(
            <p style={{color: 'var(--paragraphColor2)'}}>
              Observa cuales son las noticias 
              que realmente pueden llegar a
               tener un impacto positivo o 
               negativo en el Mercado.
            </p>
          )}
        />

        <ItemSection3 
          title={(<p>Proyectos NFTs más <b style={{ color: 'var(--ButtonColor)' }}>recomendables</b> del sector</p>)}
          description={(
            <p style={{color: 'var(--paragraphColor2)'}}>
              Encuentra e investiga a los proyectos 
              NFTs que realmente tienen un pruducto 
              innovador o una interesante propuesta 
              de valor.
            </p>
          )}
        />
       </div>
    </div>
  )
}
