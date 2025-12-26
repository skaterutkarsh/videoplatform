import Navbar from "../components/Navbar"
import UploadVideo from "../components/UploadVideo"
import VideoList from "../components/VideoList"

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <UploadVideo />
        <VideoList />
      </div>
    </>
  )
}

