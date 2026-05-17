import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"

function Fees() {

  const [fees, setFees] = useState(() => {

    const savedFees =
      localStorage.getItem("fees")

    return savedFees
      ? JSON.parse(savedFees)
      : [
          {
            id: 1,
            name: "Rahul Sharma",
            totalFee: 5000,
            paid: 3000,
          },
          {
            id: 2,
            name: "Priya Das",
            totalFee: 5000,
            paid: 5000,
          },
        ]
  })

  const [name, setName] = useState("")
  const [totalFee, setTotalFee] = useState("")
  const [paid, setPaid] = useState("")

  useEffect(() => {

    localStorage.setItem(
      "fees",
      JSON.stringify(fees)
    )

  }, [fees])

  const addFee = () => {

    if (!name || !totalFee || !paid) {
      alert("Please fill all fields")
      return
    }

    const newFee = {
      id: Date.now(),
      name,
      totalFee: Number(totalFee),
      paid: Number(paid),
    }

    setFees([...fees, newFee])

    setName("")
    setTotalFee("")
    setPaid("")
  }

  const deleteFee = (id) => {

    const updatedFees = fees.filter(
      (fee) => fee.id !== id
    )

    setFees(updatedFees)
  }

  const totalCollection = fees.reduce(
    (sum, fee) => sum + fee.paid,
    0
  )

  const totalPending = fees.reduce(
    (sum, fee) => sum + (fee.totalFee - fee.paid),
    0
  )

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          Fees Management
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Total Collection
            </h2>

            <p className="text-3xl font-bold text-green-600">
              ₹ {totalCollection}
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-gray-500">
              Total Pending
            </h2>

            <p className="text-3xl font-bold text-red-600">
              ₹ {totalPending}
            </p>

          </div>

        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl font-semibold mb-4">
            Add Fee Record
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Student Name"
              className="border p-3 rounded-lg"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Total Fee"
              className="border p-3 rounded-lg"
              value={totalFee}
              onChange={(e) =>
                setTotalFee(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Paid Amount"
              className="border p-3 rounded-lg"
              value={paid}
              onChange={(e) =>
                setPaid(e.target.value)
              }
            />

          </div>

          <button
            onClick={addFee}
            className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            Add Record
          </button>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left p-3">
                  Student
                </th>

                <th className="text-left p-3">
                  Total Fee
                </th>

                <th className="text-left p-3">
                  Paid
                </th>

                <th className="text-left p-3">
                  Pending
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

              {fees.map((fee) => {

                const pending =
                  fee.totalFee - fee.paid

                return (

                  <tr
                    key={fee.id}
                    className="border-b"
                  >

                    <td className="p-3">
                      {fee.name}
                    </td>

                    <td className="p-3">
                      ₹ {fee.totalFee}
                    </td>

                    <td className="p-3">
                      ₹ {fee.paid}
                    </td>

                    <td className="p-3">
                      ₹ {pending}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          pending === 0
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >

                        {pending === 0
                          ? "Paid"
                          : "Pending"}

                      </span>

                    </td>

                    <td className="p-3">

                      <button
                        onClick={() =>
                          deleteFee(fee.id)
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                )
              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Fees