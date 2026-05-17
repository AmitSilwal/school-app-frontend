import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"

import Students from "./pages/Students"
import Attendance from "./pages/Attendance"
import Fees from "./pages/Fees"
import Notices from "./pages/Notices"

function App() {
  return (
    <BrowserRouter basename="/school-app-frontend">
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/students" element={<Students />} />

        <Route path="/attendance" element={<Attendance />} />

        <Route path="/fees" element={<Fees />} />

        <Route path="/notices" element={<Notices />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App