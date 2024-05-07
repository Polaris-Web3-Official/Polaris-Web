import { useEffect, useState } from 'react'
import '../../style/footer.css'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  //Traduccion
  const [t] = useTranslation("global");

  const [inputValue, setInputValue] = useState('');
  const [valid, setValid] = useState(false);
  const [correctEmail, setCorrectEmail] = useState()


  const validEmail = async (email)=>{
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
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

  useEffect(()=>{
    if($span){
      $span?.classList.contains('active')  ?
      $span.innerText = 'Email correcto y listo para ser enviado.' :
      $span.innerText = 'Email incorrecto, asegurece de escribirlo bien.'
    }
  }, [inputValue])

  const $btn = document.getElementById('presentation_footer_suscription_button');
  const $form =  document.getElementById('presentation_footer_suscription_form');
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'Submit') {
      e.preventDefault();
    }
  });

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
              $span.innerText = 'Mail sent successfully ✨'
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

  useEffect(()=>{
    const email = sessionStorage.getItem('polaris_newsLater_email');
    setCorrectEmail(email)
  }, [correctEmail])

  console.log(correctEmail);

  return (
    <div className='presentation_footer'>
      <div className='presentation_footer_social'>
        <ul>
          <li><a href='' title='Polaris Web3 ~ Discord'>Discord</a></li>
          <li><a href='' title='Polaris Web3 ~ Twitter'>Twitter</a></li>
          <li><a href='' title='Polaris Web3 ~ Github'>Github</a></li>
          <li><a href='' title='Polaris Web3 ~ LinkedIn'>LinkedIn</a></li>
        </ul>

        <h4 title='Polaris Web3 ~ @Copiraid'>
          {t("copirait")}
        </h4>
      </div>

      <div className='presentation_footer_suscription'>
        <span id='presentation_footer_suscription_span' className='active'>{
          valid 
            ?
              $span?.classList.add('active')
            : 
              $span?.classList.remove('active') 
          }
            Estate al tanto de todas las actualizaciones.
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
