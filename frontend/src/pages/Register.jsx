import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    try {
      await api.post("/auth/register", {
        email,
        password,
      })

      alert("Registered successfully")
      navigate("/") // redirect to login
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={handleRegister}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  )
}

