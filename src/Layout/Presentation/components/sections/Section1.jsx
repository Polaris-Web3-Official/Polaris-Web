import Booton from '../../../../components/comuns/Booton';
import '../../style/section1.css'
import { colors } from '../../../../constants/colors';
import { useEffect } from 'react';

export default function Section1() {

  useEffect(()=>{
      //Generar la info de las estrellas 
      //----------------------------------------------------------------------------------------------------------
      function generateRandomStar() {
        const starNames = ['Sirius', 'Betelgeuse', 'Proxima Centauri', 'Alpha Centauri', 'Vega', 'Arcturus', 'Rigel', 'Pollux', 'Capella', 'Aldebaran', 'Antares', 'Spica', 'Deneb', 'Regulus', 'Fomalhaut'];
        const constellations = ['Orion', 'Canis Major', 'Centaurus', 'Lyra', 'Boötes', 'Gemini', 'Auriga', 'Taurus', 'Scorpius', 'Virgo', 'Cygnus', 'Leo', 'Pegasus', 'Aquarius', 'Sagittarius'];
        const apparentMagnitude = Math.random() * (6.5 - (-1)) + (-1); // Random number between -1 and 6.5
        const absoluteMagnitude = Math.random() * (15 - (-10)) + (-10); // Random number between -10 and 15
        const distanceLightYear = Math.random() * (1000 - 1) + 1; // Random number between 1 and 1000

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
      function generateRandomStars(numberOfStars) {
        const stars = [];
        for (let i = 0; i < numberOfStars; i++) {
          stars.push(generateRandomStar());
        }
        return stars;
      }
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
      <h2>Acceso a Informacion <br />Facil Rapida y <b style={{color: colors.ButtonColor}}>Conveniente </b></h2>
      <p>Polaris es un ecosistema de utilidades desarrolladas para facilitarte la toma de decisiones en la Blockchain</p>
      <div>
        <section>
          <Booton 
            styles={{
              backgroundColor: 'transparent',
              height: '3rem',
              padding: '1rem',
              fontSize: '1.3rem'
            }}
            text='Descargar App'
            url='https://'
          />
          <p style={{margin: '0rem 1rem 1rem 1rem'}}>Aplicacion mobil Multiplataforma</p>

          <img src='../../../../../public/svg/icons/externalLinkWhite.svg' title='' alt=''/>
        </section>

        <section>
          <Booton 
            styles={{
              backgroundColor: 'transparent',
              height: '3rem',
              padding: '1rem',
              fontSize: '1.3rem'
            }}
            url='https://docs.polarisweb3.org'
            text='Documentacion'
          />
          <p style={{margin: '0rem 1rem 1rem 1rem'}}>Especificaciones del proyecto</p>

          <img src='../../../../../public/svg/icons/externalLinkWhite.svg' title='' alt=''/>
        </section>
      </div>
    </section>
  )
}
