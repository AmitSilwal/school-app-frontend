function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-gray-500 text-lg mb-2">
        {title}
      </h2>

      <p className="text-3xl font-bold text-blue-600">
        {value}
      </p>
    </div>
  )
}

export default StatCard