//Importaciones nativas
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//Importando los estilos
import '../../style/section1.css'

//Importaciones externas
import Booton from '../../../../components/comuns/Booton';

export default function Section1() {
  //Inicializando la traduccion
  const [t] = useTranslation("global")

  //Funcion para formatear el titulo recibido de la traduccion.
  function formatTitle(title) {
    const palabras = title.split(" ");
    return (
      <h2>
        {palabras[0] + ' ' + palabras[1] + ' ' + palabras[2]} 
        <br />
        {palabras[3] + ' ' + palabras[4] + ' ' + palabras[5] +  ' '} 
          <b style={{color: 'var(--ButtonColor)'}}>{palabras[6]}</b>
      </h2>
    )
  }

  useEffect(()=>{
      //Generar la info de las estrellas 
      //----------------------------------------------------------------------------------------------------------
      function generateRandomStar() {
        const starNames = ['Sirius', 'Betelgeuse', 'Proxima Centauri', 'Alpha Centauri', 'Vega', 'Arcturus', 'Rigel', 'Pollux', 'Capella', 'Aldebaran', 'Antares', 'Spica', 'Deneb', 'Regulus', 'Fomalhaut'];
        const constellations = ['Orion', 'Canis Major', 'Centaurus', 'Lyra', 'Boötes', 'Gemini', 'Auriga', 'Taurus', 'Scorpius', 'Virgo', 'Cygnus', 'Leo', 'Pegasus', 'Aquarius', 'Sagittarius'];
        const apparentMagnitude = Math.random() * (6.5 - (-1)) + (-1); // Numero random entre -1 y 6.5
        const absoluteMagnitude = Math.random() * (15 - (-10)) + (-10); // Numero random entre -10 y 15
        const distanceLightYear = Math.random() * (1000 - 1) + 1; // Numero random entre 1 y 1000

        const randomNameIndex = Math.floor(Math.random() * starNames.length);
        const randomConstellationIndex = Math.floor(Math.random() * constellations.length);

        return {
          name: starNames[randomNameIndex],
          constellation: constellations[randomConstellationIndex],
          apparent_magnitude: apparentMagnitude.toFixed(2),
          absolute_magnitude: absoluteMagnitude.toFixed(2),
          distance_light_year: distanceLightYear.toFixed(2)
        };
      }


      //Funcion para generar las estrellas
      function generateRandomStars(numberOfStars) {
        const stars = [];
        for (let i = 0; i < numberOfStars; i++) {
          stars.push(generateRandomStar());
        }
        return stars;
      }

      //generando las estrellas
      const randomStars = generateRandomStars(100);
      //----------------------------------------------------------------------------------------------------------



      //Montar las estrellas y asignarle un title 
      //--------------------------------------------------------------------------------------------------------
      function createSquare(){
        const section = document.getElementById('section1');
        const square = document.createElement('span');
        var size = Math.random() * -10;
        square.style.width = 8 + size + 'px';
        square.style.height = 8 + size + 'px';
        square.style.top = Math.random() * innerHeight + 'px';
        square.style.left = Math.random() * innerWidth + 'px';
        let star = randomStars[Math.floor(Math.random() * randomStars.length)]
        square.title = star.name;
        section?.appendChild(square);

        // se elimina la estrella después de 10 segundos par mantener el rendimiento
        setTimeout(() => {
          square.remove();
        }, 10000); 
      }


      //Monitoreando las estrellas
      let starCreationInterval = setInterval(createSquare, 150);
      let maxStars = 400;
      function monitorStars() {
        const stars = document.querySelectorAll('section > span');
        if (stars.length > maxStars) {
          clearInterval(starCreationInterval); // Detiene la creación de más estrellas si se supera el límite
        }
      }
      setInterval(monitorStars, 1000);
    //-----------------------------------------------------------------------------------------------------------

  }, [])


  return (
    <section className='presentation_section1' id='section1'>
      {formatTitle(t('section1.title'))}

      <p className='presentation_section1_subtitle'>{t('section1.subtitle')}</p>

      <div>
        <section title='Polaris Web3 ~ Download App' onClick={()=>{
          window.location.href = '/app'
        }}>
          <Booton 
            styles={{
              backgroundColor: 'transparent',
              height: '3rem',
              padding: '1rem',
              fontSize: '1.3rem'
            }}
            title={'Polaris Web3 ~ Download App'}
            text={t('section1.buttons.btn1.title')}
            url='https://com-mrwiki-d7.uptodown.com/android/descargar'
          />
          <p style={{margin: '0rem 1rem 1rem 1rem'}}>{t('section1.buttons.btn1.subtitle')}</p>
          
          <img src='https://cusoft.tech/wp-content/uploads/2024/05/externalLinkWhite.png'/>
        </section>

        <section onClick={()=>{
          window.location.href = 'https://docs.polarisweb3.org'
        }} title='Polaris Web3 ~ Documentation'>
          <Booton 
            styles={{
              backgroundColor: 'transparent',
              height: '3rem',
              padding: '1rem',
              fontSize: '1.3rem'
            }}
            title={'Polaris Web3 ~ Documentation'}
            url='https://docs.polarisweb3.org'
            text={t('section1.buttons.btn2.title')}
          />
          <p style={{margin: '0rem 1rem 1rem 1rem'}}>{t('section1.buttons.btn2.subtitle')}</p>

          <img src='https://cusoft.tech/wp-content/uploads/2024/05/externalLinkWhite.png'/>
        </section>
      </div>
    </section>
  )
}
