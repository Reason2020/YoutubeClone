import { createContext, useState } from "react";

const NotificationsContext = createContext();

export const NotificationsContextProvider = ({ children }) => {
    const [ notificationsOpen, setNotificationsOpen ] = useState(false);

    const toggleNotifications = () => {
        setNotificationsOpen(previousValue => !previousValue);
    }

    return (
        <NotificationsContext.Provider value={{ notificationsOpen, toggleNotifications }}>
            {children}
        </NotificationsContext.Provider>
    )
}

export default NotificationsContext;