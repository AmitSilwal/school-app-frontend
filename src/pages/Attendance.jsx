import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"

function Attendance() {

  const [students, setStudents] = useState(() => {

    const savedAttendance =
      localStorage.getItem("attendance")

    return savedAttendance
      ? JSON.parse(savedAttendance)
      : [
          {
            id: 1,
            name: "Rahul Sharma",
            status: "Present",
          },
          {
            id: 2,
            name: "Priya Das",
            status: "Absent",
          },
          {
            id: 3,
            name: "Amit Roy",
            status: "Present",
          },
        ]
  })

  useEffect(() => {

    localStorage.setItem(
      "attendance",
      JSON.stringify(students)
    )

  }, [students])

  const markAttendance = (id, status) => {

    const updatedStudents = students.map(
      (student) =>
        student.id === id
          ? { ...student, status }
          : student
    )

    setStudents(updatedStudents)
  }

  const totalStudents = students.length

  const presentStudents = students.filter(
    (student) =>
      student.status === "Present"
  ).length

  const absentStudents = students.filter(
    (student) =>
      student.status === "Absent"
  ).length

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Attendance Management
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

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
              Present
            </h2>

            <p className="text-3xl font-bold text-green-600">
              {presentStudents}
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Absent
            </h2>

            <p className="text-3xl font-bold text-red-600">
              {absentStudents}
            </p>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left p-3">
                  Student Name
                </th>

                <th className="text-left p-3">
                  Status
                </th>

                <th className="text-left p-3">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {students.map((student) => (

                <tr
                  key={student.id}
                  className="border-b"
                >

                  <td className="p-3">
                    {student.name}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        student.status === "Present"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {student.status}
                    </span>

                  </td>

                  <td className="p-3 space-x-2">

                    <button
                      onClick={() =>
                        markAttendance(
                          student.id,
                          "Present"
                        )
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Present
                    </button>

                    <button
                      onClick={() =>
                        markAttendance(
                          student.id,
                          "Absent"
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Absent
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Attendance