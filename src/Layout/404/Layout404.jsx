/* eslint-disable no-inner-declarations */

//importaciones nativas
import { useEffect } from 'react'

//importando estilos
import './layout404.css'

//Importando estilos
import '../../Layout/Presentation/style/section5.css'

//Importaciones externas
import Booton from '../../components/comuns/Booton'

export default function Layout404() {

    useEffect(()=>{
    const planets = document.querySelectorAll(".planet");
    let startTime = Date.now(); 
    if (planets) {
      function updatePositions() {
        const now = Date.now() - startTime; // Tiempo transcurrido desde el inicio
        planets.forEach((planet, index) => {
          const orbitTime = (index + 1) * 5000; //  Periodo orbital en milisegundos (5s para Mercurio, 10s para Venus, etc.)
          const distanceFromSun = (index + 1) * 50; // Distancia al sol en píxeles (50 para Mercurio, 100 para Venus, etc.)
          const diameter = getPlanetDiameter(index + 1); // Diámetro del planeta según el índice
          const angle = ((now % orbitTime) / orbitTime) * 360; // Ángulo actual basado en el tiempo pasado
          const x = distanceFromSun * Math.cos((angle * Math.PI) / 180); // Posición X basada en la distancia y el ángulo
          const y = distanceFromSun * Math.sin((angle * Math.PI) / 180); // Posición Y basada en la distancia y el ángulo
          planet.style.width = `${diameter}px`; // Fijar la anchura en función del diámetro
          planet.style.height = `${diameter}px`; // Ajuste de la altura en función del diámetro
          planet.style.left = `calc(50% - ${diameter / 2}px + ${x}px)`; // Ajuste del cálculo de la posición para el diámetro
          planet.style.top = `calc(50% - ${diameter / 2}px + ${y}px)`; // Ajuste del cálculo de la posición para el diámetro
        });
      }

      function getPlanetDiameter(index) {
        const diameters = [6, 15, 16, 8, 160, 130, 60, 55, 4]; // Diámetro de los planetas en kilómetros
        const scaleFactor = [1, 0.7, 0.6, 0.4, 0.2, 0.1, 0.08, 0.05, 0.002]; // Factor de escala para la relación de tamaño
        return diameters[index - 1] * scaleFactor[index - 1]; // Retorno del diámetro con escalado
      }

      //function restartAnimation() {
      //  startTime = Date.now(); // Fijar la hora de inicio de la animación a la hora actual
      //}

      function createStars() {
        const starField = document.querySelector(".star-field");
        const numStars = 100; // Número de estrellas
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement("div");
          star.classList.add("star");
          star.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
          star.style.top = `${Math.random() * 100}%`; // Posición vertical aleatoria
          star.style.animationDelay = `${Math.random()}s`; // Retardo aleatorio para el efecto centelleo
          starField?.appendChild(star);
        }
      }
      createStars();
      setInterval(updatePositions, 1000 / 60); // Refresco cada 16,67 ms (aprox. 60 FPS)
    }
  }, [])
  
   document.getElementById('root').style.padding = '0px';

  return (
    <div className='presentation_section5' id='layout404' >
      <div className="presentation_section5_solar-system" title='Polaris Web3 ~ Solar System Web3 Projects'>
        <div className="sun" style={{overflow: 'hidden'}}>
        <img style={{width: '100%', height: '100%'}} 
              src='https://cusoft.tech/wp-content/uploads/2024/05/ICON_V01.svg' 
              title='Polaris Web3 ~ Solar system' 
              alt='Polaris Web3 ~ Solar system'/>
        </div>
        <div className="planet mercury"></div>
        <div className="planet venus"></div>
        <div className="planet earth"></div>
        <div className="planet mars"></div>
        <div className="planet jupiter"></div>
        <div className="planet saturn"></div>
        <div className="planet uranus"></div>
        <div className="planet neptune"></div>
        <div className="planet pluto"></div>
      </div>

      <div className='presentation_section5'
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: blur('30px')
        }}
      >
        <h3>
           404 
        </h3>

        <h5 style={{padding: '0rem 25rem'}}>
          We are sorry but the page you are looking for does not exist. Are you sure you want to come here and not to one of the following sections?
        </h5>
        <div className='presentation_section5_buttons'>
          <div>
            <Booton 
              styles={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                padding: '0px',
              }}
              text='➡'
              title={'Polaris Web3 ~ Documentation in GitBook'}
              url='/'
            />
            <span>Homepage</span>
          </div>
          <div>
            <Booton 
              styles={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                padding: '0px',
              }}
              title={'Polaris Web3 ~ Documentation on Github'}
              text='➡'
              url='/app'
            />
            <span>Polaris App</span>
          </div>
        </div>
      </div>
    </div>
  )
}
