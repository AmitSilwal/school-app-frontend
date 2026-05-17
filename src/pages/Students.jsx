import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"

function Students() {

  const [students, setStudents] = useState(() => {

    const savedStudents =
      localStorage.getItem("students")

    return savedStudents
      ? JSON.parse(savedStudents)
      : [
          {
            id: 1,
            name: "Rahul Sharma",
            class: "10",
            roll: 12,
          },
          {
            id: 2,
            name: "Priya Das",
            class: "9",
            roll: 5,
          },
        ]
  })

  const [name, setName] = useState("")
  const [studentClass, setStudentClass] = useState("")
  const [roll, setRoll] = useState("")
  const [search, setSearch] = useState("")
  const [editId, setEditId] = useState(null)

  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    )

  }, [students])

  const addStudent = () => {

    if (!name || !studentClass || !roll) {
      alert("Please fill all fields")
      return
    }

    if (editId) {

      const updatedStudents = students.map((student) =>
        student.id === editId
          ? {
              ...student,
              name,
              class: studentClass,
              roll,
            }
          : student
      )

      setStudents(updatedStudents)
      setEditId(null)

    } else {

      const newStudent = {
        id: Date.now(),
        name,
        class: studentClass,
        roll,
      }

      setStudents([...students, newStudent])
    }

    setName("")
    setStudentClass("")
    setRoll("")
  }

  const deleteStudent = (id) => {

    const filteredStudents = students.filter(
      (student) => student.id !== id
    )

    setStudents(filteredStudents)
  }

  const editStudent = (student) => {

    setName(student.name)
    setStudentClass(student.class)
    setRoll(student.roll)

    setEditId(student.id)
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(
      search.toLowerCase()
    )
  )

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Students Management
        </h1>

        {/* Form */}

        <div className="card mb-6">

          <h2 className="text-xl font-semibold mb-4">

            {editId
              ? "Edit Student"
              : "Add Student"}

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Student Name"
              className="input-field"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Class"
              className="input-field"
              value={studentClass}
              onChange={(e) =>
                setStudentClass(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Roll Number"
              className="input-field"
              value={roll}
              onChange={(e) =>
                setRoll(e.target.value)
              }
            />

          </div>

          <button
            onClick={addStudent}
            className="mt-4 primary-btn"
          >

            {editId
              ? "Update Student"
              : "Add Student"}

          </button>

        </div>

        {/* Search */}

        <div className="mb-4">

          <input
            type="text"
            placeholder="Search Student"
            className="input-field bg-white"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Table */}

        <div className="card overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b bg-gray-50">

                <th className="text-left p-4">
                  Name
                </th>

                <th className="text-left p-4">
                  Class
                </th>

                <th className="text-left p-4">
                  Roll
                </th>

                <th className="text-left p-4">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredStudents.map((student) => (

                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">
                    {student.name}
                  </td>

                  <td className="p-4">
                    {student.class}
                  </td>

                  <td className="p-4">
                    {student.roll}
                  </td>

                  <td className="p-4 space-x-2">

                    <button
                      onClick={() =>
                        editStudent(student)
                      }
                      className="warning-btn"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteStudent(student.id)
                      }
                      className="danger-btn"
                    >
                      Delete
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

export default Students 