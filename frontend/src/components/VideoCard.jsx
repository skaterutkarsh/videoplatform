import { Link } from "react-router-dom"

export default function VideoCard({ video }) {
  const statusColor =
    video.status === "SAFE"
      ? "text-green-600"
      : video.status === "FLAGGED"
      ? "text-red-600"
      : "text-yellow-600"

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between">
      <div>
        <p className="font-bold">{video.filename}</p>
        <span className={`text-sm ${statusColor}`}>
          {video.status}
        </span>
      </div>

      {video.status === "SAFE" && (
        <Link
          to={`/player/${video._id}`}
          className="text-blue-600"
        >
          Play
        </Link>
      )}
    </div>
  )
}
