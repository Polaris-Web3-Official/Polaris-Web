import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { GlobalContextProvider } from './context/GlobalContextProvider.jsx'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

//Traducciones
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

i18next.init({
  interpolation : {escapeValue: false},
  lng: "en",
  resources: {
    es : {
      global: global_es
    },
    en : {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18next}>
      <GlobalContextProvider>
          <App />
      </GlobalContextProvider>
    </I18nextProvider>
)
