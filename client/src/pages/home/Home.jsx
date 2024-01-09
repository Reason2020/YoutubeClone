import React from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import VideosContainer from '../../components/videosContainer/VideosContainer'
import TagsContainer from '../../components/tagsContainer/TagsContainer'

const Home = () => {
  return (
    <div className='container'>
        <Sidebar />
        <div className="main_box">
          <TagsContainer />
          <VideosContainer />
        </div>
        
    </div>
  )
}

export default Home