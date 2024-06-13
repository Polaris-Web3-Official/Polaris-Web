import { useEffect } from 'react'
import '../styles/background.css'

export default function Background() {

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
        const section = document.getElementById('links_background');
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
    <section id='links_background'>
    
    </section>
  )
}
