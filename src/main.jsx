import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { GlobalContextProvider } from './context/GlobalContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
