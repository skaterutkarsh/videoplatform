import { useEffect } from "react"
import Navbar from "../components/Navbar"
import UploadVideo from "../components/UploadVideo"
import VideoList from "../components/VideoList"
import { socket } from "../socket"

export default function Dashboard() {
  useEffect(() => {
    // connect socket ONLY when dashboard loads
    socket.connect()

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id)
    })

    socket.on("processing-progress", (data) => {
      console.log("Processing progress:", data)
    })

    socket.on("processing-complete", (data) => {
      console.log("Processing complete:", data)
    })

    return () => {
      socket.off("processing-progress")
      socket.off("processing-complete")
      socket.disconnect()
    }
  }, [])

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
