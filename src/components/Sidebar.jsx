import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return isSidebarOpen ? (
    <div className="h-screen bg-slate-200 shadow-lg w-56 absolute left-0 top-[70px]">
      <div className="p-5 flex flex-col gap-3">
        <div>
          <Link
            to="/dashboard"
            className="text-slate-900 block rounded-md text-xl duration-300 hover:bg-slate-400 pl-2 cursor-pointer"
          >
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            to="/jobs"
            className="text-slate-900 block rounded-md text-xl duration-300 hover:bg-slate-400 pl-2 cursor-pointer"
          >
            My Jobs
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
