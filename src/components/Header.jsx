import { Link } from "react-router-dom";
import {useSidebar} from "../context/SidebarContext";

const Header = () => {
     const { toggleSidebar } = useSidebar();
    const engineerName = JSON.parse(localStorage.getItem("formData"))?.engineerName;
  return (
    <div className="px-12 flex justify-between items-center h-[70px] bg-white shadow-lg">
      <div className="flex items-center gap-2">
        <div onClick={toggleSidebar} className="bg-slate-300 duration-150 hover:bg-slate-400 mr-2 rounded-[50%] p-1 cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-7 h-7" focusable="false">
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
        </div>
        <Link
          to="/"
          className="text-2xl duration-300 hover:text-blue-800 text-blue-600 font-semibold cursor-pointer"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-10 w-10 object-cover cursor-pointer rounded-[50%]"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="logo"
        />
        <p className="text-base text-slate-600 cursor-pointer duration-300 font-semibold hover:text-blue-600">{engineerName}</p>
      </div>
    </div>
  );
}

export default Header