import React from 'react'
import './NotificationsContainer.scss'
import { SettingsOutlined } from '@mui/icons-material';
import NotificationCard from '../notificationCard/NotificationCard';

const NotificationsContainer = () => {
    const dummyNotifications = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

  return (
    <div className='notifications_box_container'>
        <div className="notifications_header_container">
            <p className="notifications_header">Notifications</p>
            <SettingsOutlined 
                sx={{
                    marginRight: '1.3rem'
                }} />
        </div>
        <div className="notifications_list_container">
            {
                dummyNotifications.map((notification, index) => (
                    <NotificationCard />
                ))
            }
        </div>
    </div>
  )
}

export default NotificationsContainer