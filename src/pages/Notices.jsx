import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"

function Notices() {

  const [notices, setNotices] = useState(() => {

    const savedNotices =
      localStorage.getItem("notices")

    return savedNotices
      ? JSON.parse(savedNotices)
      : [
          {
            id: 1,
            title: "School Closed",
            message:
              "School will remain closed on Monday due to heavy rain.",
            date: "17 May 2026",
          },
        ]
  })

  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {

    localStorage.setItem(
      "notices",
      JSON.stringify(notices)
    )

  }, [notices])

  const addNotice = () => {

    if (!title || !message) {
      alert("Please fill all fields")
      return
    }

    const newNotice = {
      id: Date.now(),
      title,
      message,
      date: new Date().toLocaleDateString(),
    }

    setNotices([newNotice, ...notices])

    setTitle("")
    setMessage("")
  }

  const deleteNotice = (id) => {

    const updatedNotices = notices.filter(
      (notice) => notice.id !== id
    )

    setNotices(updatedNotices)
  }

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Notice Board
        </h1>

        {/* Add Notice Form */}

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl font-semibold mb-4">
            Add Notice
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Notice Title"
              className="border p-3 rounded-lg w-full"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <textarea
              placeholder="Write notice message..."
              className="border p-3 rounded-lg w-full h-32"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />

            <button
              onClick={addNotice}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg"
            >
              Publish Notice
            </button>

          </div>

        </div>

        {/* Notice List */}

        <div className="space-y-4">

          {notices.map((notice) => (

            <div
              key={notice.id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold mb-2">
                    {notice.title}
                  </h2>

                  <p className="text-gray-700 mb-3">
                    {notice.message}
                  </p>

                  <p className="text-sm text-gray-500">
                    Published on: {notice.date}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteNotice(notice.id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Notices