import { RiAccountPinCircleLine } from "react-icons/ri"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Phantom Rentals</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About us</a></li>  
      <li><a>Contact us</a></li>  
      <li>
        <details>
          <summary className="flex items-center">Account <RiAccountPinCircleLine size={21}/> </summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Login</a></li>
            <li><a>Register</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

  )
}

export default NavBar