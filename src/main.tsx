import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store/store.ts'
import { ToastProvider } from './Toast/Toast.tsx'
import { LocalStorageProvider } from './context_comp/Storage.tsx'
import { AuthProvider } from './context_comp/Auth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <LocalStorageProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
        </LocalStorageProvider>
      </ToastProvider>
    </Provider>
  </StrictMode>,
)
