import { useEffect, useState } from "react"
import api from "../api"
import VideoCard from "./VideoCard"

export default function VideoList() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    api.get("/videos").then(res => setVideos(res.data))
  }, [])

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Your Videos</h2>

      {videos.length === 0 && (
        <p className="text-gray-500">No videos uploaded yet</p>
      )}

      <div className="space-y-3">
        {videos.map(video => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  )
}
