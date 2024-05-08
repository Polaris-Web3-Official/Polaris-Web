/* eslint-disable no-inner-declarations */
import { useEffect } from 'react'
import Booton from '../../../../components/comuns/Booton'
import '../../style/section5.css'
import { useTranslation } from 'react-i18next'

export default function Section5() {
  const [t] = useTranslation("global");

  useEffect(()=>{
    const planets = document.querySelectorAll(".planet");
    let startTime = Date.now(); 
    if (planets) {
      function updatePositions() {
        const now = Date.now() - startTime; // Aktuelle vergangene Zeit seit dem Start
        planets.forEach((planet, index) => {
          const orbitTime = (index + 1) * 5000; // Umlaufzeit in Millisekunden (5s für Merkur, 10s für Venus usw.)
          const distanceFromSun = (index + 1) * 50; // Abstand zur Sonne in Pixel (50 für Merkur, 100 für Venus usw.)
          const diameter = getPlanetDiameter(index + 1); // Durchmesser des Planeten basierend auf dem Index
          const angle = ((now % orbitTime) / orbitTime) * 360; // Aktueller Winkel basierend auf der vergangenen Zeit
          const x = distanceFromSun * Math.cos((angle * Math.PI) / 180); // X-Position basierend auf dem Abstand und dem Winkel
          const y = distanceFromSun * Math.sin((angle * Math.PI) / 180); // Y-Position basierend auf dem Abstand und dem Winkel
          planet.style.width = `${diameter}px`; // Setzen der Breite basierend auf dem Durchmesser
          planet.style.height = `${diameter}px`; // Setzen der Höhe basierend auf dem Durchmesser
          planet.style.left = `calc(50% - ${diameter / 2}px + ${x}px)`; // Anpassung der Positionsberechnung für den Durchmesser
          planet.style.top = `calc(50% - ${diameter / 2}px + ${y}px)`; // Anpassung der Positionsberechnung für den Durchmesser
        });
      }

      function getPlanetDiameter(index) {
        const diameters = [6, 15, 16, 8, 160, 130, 60, 55, 4]; // Durchmesser der Planeten in Kilometern
        const scaleFactor = [1, 0.7, 0.6, 0.4, 0.2, 0.1, 0.08, 0.05, 0.002]; // Skalierungsfaktor für die Größenrelation
        return diameters[index - 1] * scaleFactor[index - 1]; // Rückgabe des Durchmessers mit Skalierung
      }

      //function restartAnimation() {
      //  startTime = Date.now(); // Setzen der Startzeitpunkt der Animation auf die aktuelle Zeit
      //}

      function createStars() {
        const starField = document.querySelector(".star-field");
        const numStars = 100; // Anzahl der Sterne
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement("div");
          star.classList.add("star");
          star.style.left = `${Math.random() * 100}%`; // Zufällige horizontale Position
          star.style.top = `${Math.random() * 100}%`; // Zufällige vertikale Position
          star.style.animationDelay = `${Math.random()}s`; // Zufällige Verzögerung für den Twinkle-Effekt
          starField?.appendChild(star);
        }
      }
      createStars();
      setInterval(updatePositions, 1000 / 60); // Alle 16,67 ms aktualisieren (ca. 60 FPS)
    }
  }, [])

  return (
    <div className='presentation_section5' id='section5'>
      <div className="presentation_section5_solar-system" title='Polaris Web3 ~ Solar System Web3 Projects'>
        <div className="sun" style={{overflow: 'hidden'}}>
        <img style={{width: '100%', height: '100%'}} 
              src='../../../../../public/svg/polaris/ICON_V01.svg' 
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
          {t('section4.title')}
        </h3>

        <h5 style={{padding: '0rem 25rem'}}>
          {t('section4.subtitle')}
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
              url='https://docs.polarisweb3.org'
            />
            <span>{t('section4.buttons.btn1.title')}</span>
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
              url='https://github.com/MrWiki15/docs_polaris'
            />
            <span>{t('section4.buttons.btn2.title')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


