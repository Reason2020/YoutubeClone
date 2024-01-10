import React, { useContext } from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import VideosContainer from '../../components/videosContainer/VideosContainer'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import NotificationsContext from '../../contexts/NotificationsContext'
import NotificationsContainer from '../../components/notificationsContainer/NotificationsContainer'

const Home = () => {
  const { notificationsOpen } = useContext(NotificationsContext);

  return (
    <div className='container'>
        <Sidebar />
        <div className="main_box">
          {
            notificationsOpen ? <NotificationsContainer /> : null
          }
          <TagsContainer />
          <VideosContainer />
        </div>
    </div>
  )
}

export default Home