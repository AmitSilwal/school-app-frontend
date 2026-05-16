import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    if (
      email === "admin@schoolapp.com" &&
      password === "admin123"
    ) {
      navigate("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-xl"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-xl"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 mb-4"
        >
          Login
        </button>

        <div className="text-center">
          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage