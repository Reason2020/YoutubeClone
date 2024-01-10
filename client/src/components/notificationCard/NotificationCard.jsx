import React from 'react'
import channelLogo from '../../assets/channelLogo.jpg'
import videoThumbnail from '../../assets/thumbnail.webp'
import './NotificationCard.scss';

const NotificationCard = () => {
  return (
    <div className='notification_card'>
        <img src={channelLogo} alt="Channel Logo" className='notification_channel_logo' />
        <div className="notifications_detail">
            <p className="notification_title">freeCodeCamp.org uploaded: Learn PostgreSQL Tutorial - Full Course for Beginners</p>
            <p className="notification_time">12 hours ago</p>
        </div>
        <img src={videoThumbnail} alt="Video Thumbnail" className='notification_thumbnail_logo' />
    </div>
  )
}

export default NotificationCard