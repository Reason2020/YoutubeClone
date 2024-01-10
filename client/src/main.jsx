import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarContextProvider } from './contexts/SidebarContext.jsx'
import { NotificationsContextProvider } from './contexts/NotificationsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarContextProvider>
      <NotificationsContextProvider>
        <App />
      </NotificationsContextProvider>
    </SidebarContextProvider>
  </React.StrictMode>,
)
