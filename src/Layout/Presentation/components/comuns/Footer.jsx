//Importaciones nativas
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

//Importando estilos
import '../../style/footer.css'

export default function Footer() {
  //Inicializando la traduccion
  const [t] = useTranslation("global");

  //Inicializando los respectivos estados
  const [inputValue, setInputValue] = useState('');
  const [valid, setValid] = useState(false);
  const [correctEmail, setCorrectEmail] = useState()

  //Funcion para validar el email ingresado por el usuario
  const validEmail = async (email)=>{

    //Exprecion regular para verificar el Email
    //Mas informacion sobre esta expresion en la carpeta /reguex
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    //Utilizamos la expresion regular
    const valid = expReg.test(email)
    if (valid) {
      setValid(true)
      console.log(`El correo recibido es: ${email} y se a definido que es un correo ${valid}`);
    } else {
      setValid(false)
      console.log(`El correo recibido es: ${email} y se a definido que es un correo ${valid}`);
    }
  }

  const $span = document.getElementById('presentation_footer_suscription_span');

  //Si el valor del input cambia, nosotros le vamos
  //mostrando informacion al usuario sobre su Email
  useEffect(()=>{
    if($span){
      $span?.classList.contains('active')  ?
      $span.innerText = t('suscription.correct') :
      $span.innerText = t('suscription.incorrect')
    }
  }, [inputValue])

  const $btn = document.getElementById('presentation_footer_suscription_button');
  const $form =  document.getElementById('presentation_footer_suscription_form');

  //Eliminamos la accion por defecto de estas teclas
  //para evitar repeticiones. El usuario solo puede mandar su email
  //dando en el boton de (Enviar)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'Submit') {
      e.preventDefault();
    }
  });


  //En el caso de ser el email ingresado por el usuario valido
  //usamos el servicio de emailjs para mandar un mensaje de
  //bienvenida a los usuarios y guardar el email en la Sesion.
  if($btn && valid){
    $form.addEventListener('submit', async (e)=> {
        e.preventDefault();
        $btn.innerText = 'Sending ...';
        const serviceID = 'service_qb01h8a';
        const templateID = 'template_6q96643';
        if (correctEmail === null && valid) {  
        // eslint-disable-next-line no-undef
          emailjs.sendForm(serviceID, templateID, $form)
            .then(() => {
              sessionStorage.setItem('polaris_newsLater_email', inputValue)
              setCorrectEmail(inputValue)
              $span.innerText = t('suscription.welldone')
              $btn.style.display = 'none';
            }, (err) => {
              $btn.innerText = 'Bad response :(';
              console.log(JSON.stringify(err));
            }
          );
        }
      }
    );
  }

  //Buscamos en la Sesion si esta guardado el email
  //y en el caso de estarlo
  useEffect(()=>{
    const email = sessionStorage.getItem('polaris_newsLater_email');
    setCorrectEmail(email)
  }, [correctEmail])

  console.log(correctEmail);

  return (
    <div className='presentation_footer'>
      <div className='presentation_footer_social'>
        <ul>
          <li><a href='https://twitter.com/PolarisWeb3' title='Polaris Web3 ~ Twitter'>Twitter</a></li>
          <li><a href='https://github.com/Polaris-Web3-Official' title='Polaris Web3 ~ Github'>Github</a></li>
          <li><a href='https://www.linkedin.com/company/qsoft-tech/' title='Polaris Web3 ~ LinkedIn'>LinkedIn</a></li>
        </ul>

        <h4 title='Polaris Web3 ~ @Copiraid'>
          {t("copirait")}
        </h4>
      </div>

      <div className='presentation_footer_suscription'>
        <span id='presentation_footer_suscription_span' className='active'>
        {
          valid 
            ?
              $span?.classList.add('active')
            : 
              $span?.classList.remove('active') 
          }
            {t('suscription.init')}
          </span>
        <form 
          title='Polaris Web3 ~ Form Suscription'
          id="presentation_footer_suscription_form"
        >
          <input 
            placeholder='example@gmail.com'
            id="reply_to"
            type="email"
            name="reply_to"
            autoComplete='off'
            contentEditable={correctEmail === undefined ? 'true' : 'false'}
            value={correctEmail === undefined ? ' ' : correctEmail}
            required
            onChange={(v)=> {
              setInputValue(v.target.value)
              validEmail(inputValue)
              }
            }
          />
          <button 
            type='submit' 
            id='presentation_footer_suscription_button'
            style={{
              display: correctEmail === null && valid ? 'flex' : 'none',
              backgroundColor: valid ? 'var(mainBackgroundColor) !important' : 'transparent',
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
