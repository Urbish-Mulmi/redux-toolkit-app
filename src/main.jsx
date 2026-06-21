import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* //wrap app with provider store to enable redux workability */}
        <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>,
)
