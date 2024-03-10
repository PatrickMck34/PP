import React from 'react';
import {Link} from "react-router-dom"
function AdminHome() {
  return (
    <div>
      <h1 className="text-3xl flex items-center justify-center">Welcome Admin</h1>
      <div>
    
        <ul className="text-xl flex items-center justify-center p-4 flex-col text-white">
          <li>
            <Link to="/admin/listings">
            <button className="bg-teal-600 rounded-xl p-1 text-pink-50 flex h-fit w-full border-2 border-slate-800">
            View all Providers
            </button>
            </Link>
            </li>
          <li>
          <button className="bg-teal-600 mt-2 rounded-xl p-1 text-pink-50 flex h-fit w-full border-2 border-slate-800">
            View all Users
            </button>
            </li>
          <li>
          <button className="bg-teal-600 mt-2 rounded-xl p-1 text-pink-50 flex h-fit w-full border-2 border-slate-800">
            View Pending Approvals
            </button>
            </li>
        </ul>
      </div>
    </div>
  );
}
export default AdminHome;