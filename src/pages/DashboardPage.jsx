import StatCard from "../components/StatCard"

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Students" value="520" />

        <StatCard title="Total Teachers" value="42" />

        <StatCard title="Today's Attendance" value="91%" />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Announcements
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>📢 Parent-Teacher Meeting on Friday</li>
          <li>📚 Homework submission due tomorrow</li>
          <li>🎉 Annual Sports preparation starts next week</li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardPage