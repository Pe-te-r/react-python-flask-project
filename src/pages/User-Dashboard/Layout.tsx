import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

// Layout Component
const Layout = () => {
    return (
      <div className="flex h-screen">
        {/* SideNav */}
        <SideNav />
  
        {/* Main Content Area */}
        {/* <div className="flex-1"> */}
          {/* Header */}
          {/* <NavBar/> */}
          {/* Page Content */}
          <div className="p-4">
            <Outlet /> {/* This will render the matched route's component */}
          </div>
        {/* </div> */}
      </div>
    );
  };
  
export default Layout