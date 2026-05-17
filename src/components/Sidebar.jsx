import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">School Admin</h1>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>

        <li>
          <Link to="/attendance">Attendance</Link>
        </li>

        <li>
          <Link to="/fees">Fees</Link>
        </li>

        <li>
          <Link to="/notices">Notices</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;