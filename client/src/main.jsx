import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SidebarContextProvider } from './contexts/SidebarContext.jsx'
import { NotificationsContextProvider } from './contexts/NotificationsContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <SidebarContextProvider>
        <NotificationsContextProvider>
          <App />
        </NotificationsContextProvider>
      </SidebarContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
