import { Link } from "react-router-dom";

const SideNav = () => {
    return (
      <div className="h-full w-64 bg-blue-500 text-black flex flex-col text-[1.2rem] font-semibold space-y-4 p-4 ">
        <Link to="/dashboard" className="hover:bg-gray-700 hover:text-white p-2 rounded">Dashboard</Link>
        <Link to="/profile" className="hover:bg-gray-700 hover:text-white p-2 rounded">Profile</Link>
      </div>
    );
  };

  export default SideNav