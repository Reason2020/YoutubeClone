import React from 'react'
import VideoCard from '../videocard/VideoCard'
import './VideosContainer.scss'

const VideosContainer = () => {
  const dummyVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    <div className='videos_container'>
      {
        dummyVideos.map((video, index) => (
          <VideoCard key={index} videoId={index} />
        ))
      }
    </div>
  )
}

export default VideosContainer