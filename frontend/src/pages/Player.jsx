import { useParams } from "react-router-dom"

export default function Player() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Video Player</h2>
      <video controls className="w-full rounded">
        <source src={`http://localhost:5000/api/videos/stream/${id}`} />
      </video>
    </div>
  )
}
