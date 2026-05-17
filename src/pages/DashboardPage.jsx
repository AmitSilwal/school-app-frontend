import Sidebar from "../components/Sidebar"

function DashboardPage() {

  const students =
    JSON.parse(localStorage.getItem("students")) || []

  const fees =
    JSON.parse(localStorage.getItem("fees")) || []

  const notices =
    JSON.parse(localStorage.getItem("notices")) || []

  const attendance =
    JSON.parse(localStorage.getItem("attendance")) || []

  const totalStudents = students.length

  const totalPendingFees = fees.reduce(
    (sum, fee) =>
      sum + (fee.totalFee - fee.paid),
    0
  )

  const presentStudents = attendance.filter(
    (student) => student.status === "Present"
  ).length

  const attendancePercentage =
    attendance.length > 0
      ? Math.round(
          (presentStudents / attendance.length) * 100
        )
      : 0

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard
        </h1>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Total Students
            </h2>

            <p className="text-3xl font-bold">
              {totalStudents}
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Attendance
            </h2>

            <p className="text-3xl font-bold text-green-600">
              {attendancePercentage}%
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Pending Fees
            </h2>

            <p className="text-3xl font-bold text-red-600">
              ₹ {totalPendingFees}
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Notices
            </h2>

            <p className="text-3xl font-bold">
              {notices.length}
            </p>

          </div>

        </div>

        {/* Recent Notices */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            Recent Notices
          </h2>

          {notices.length === 0 ? (

            <p>No notices available</p>

          ) : (

            <div className="space-y-4">

              {notices.slice(0, 3).map((notice) => (

                <div
                  key={notice.id}
                  className="border-b pb-3"
                >

                  <h3 className="font-semibold text-lg">
                    {notice.title}
                  </h3>

                  <p className="text-gray-600">
                    {notice.message}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default DashboardPage