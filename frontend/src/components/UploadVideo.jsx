import { useEffect, useState } from "react"
import api from "../api"
import { socket } from "../socket"

export default function UploadVideo() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    socket.on("processing-progress", data => {
      setProgress(data.progress)
    })

    return () => socket.off("processing-progress")
  }, [])

  const upload = async e => {
    const form = new FormData()
    form.append("video", e.target.files[0])
    await api.post("/videos/upload", form)
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <input type="file" onChange={upload} />

      {progress > 0 && (
        <div className="mt-3">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-blue-600 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm mt-1">{progress}% processing</p>
        </div>
      )}
    </div>
  )
}
