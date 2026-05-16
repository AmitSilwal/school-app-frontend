import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          School App MVP
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to the School Management System.
        </p>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default HomePage