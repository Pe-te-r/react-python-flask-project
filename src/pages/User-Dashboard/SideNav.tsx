import { Link } from "react-router-dom";

const SideNav = () => {
    return (
      <div className="h-full w-64 bg-gray-800 text-white flex flex-col space-y-4 p-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/profile" className="hover:bg-gray-700 p-2 rounded">Profile</Link>
      </div>
    );
  };

  export default SideNav