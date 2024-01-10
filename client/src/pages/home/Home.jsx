import React, { useContext } from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import VideosContainer from '../../components/videosContainer/VideosContainer'
import TagsContainer from '../../components/tagsContainer/TagsContainer'
import NotificationsContext from '../../contexts/NotificationsContext'
import NotificationsContainer from '../../components/notificationsContainer/NotificationsContainer'
import SidebarContext from '../../contexts/SidebarContext'
import MinifiedSidebar from '../../components/minifiedSidebar/MinifiedSidebar'

const Home = () => {
  const { notificationsOpen } = useContext(NotificationsContext);
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <div className={`container ${sidebarOpen ? 'sidebaropen' : 'sidebarclosed'}`}>
        {
          sidebarOpen ? <Sidebar /> : <MinifiedSidebar />
        }
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