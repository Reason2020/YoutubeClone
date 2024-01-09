import React, { useContext } from 'react'
import thumbnailLogo from '../../assets/thumbnail.webp'
import channelLogo from '../../assets/channelLogo.jpg'
import './VideoCard.scss'
import SidebarContext from '../../contexts/SidebarContext'

const VideoCard = () => {
    const { sidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`video_card ${sidebarOpen ? 'sidebar_open' : 'sidebar_closed'}`}>
        <img src={thumbnailLogo} alt="Video Thumbnail" className='thumbnail_logo' />
        <div className="video_details">
            <img src={channelLogo} alt="Channel Logo" className='.channel_logo' />
            <div className="video_description">
                <p className="video_title">Learn PostgreSQL Tutorial - Full Course for Beginners</p>
                <p className="channel_name">freeCodeCamp.org</p>
                <p className="video_stats">2.2M views • 4 years ago</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard