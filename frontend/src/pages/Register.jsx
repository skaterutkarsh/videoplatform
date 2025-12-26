export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
        />
        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
        />
        <button className="bg-green-600 text-white w-full py-2 rounded">
          Register
        </button>
      </div>
    </div>
  )
}
