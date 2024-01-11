import React from 'react'
import { useParams } from 'react-router-dom'

const VideoDetails = () => {
  const { videoId } = useParams()
  return (
    <div>
        <h1>Video Details {videoId}</h1>
    </div>
  )
}

export default VideoDetails