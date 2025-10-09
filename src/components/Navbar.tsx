import { Link, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const {logout} = useAuth()
  const Navigate = useNavigate();
  const handleLogout = () => {
    logout();
    Navigate({to: "/dashboard"});
  }
  
  return (
    <nav className="hidden md:flex space-x-6 mx-4 py-3">
        <Link to={"/dashboard"} className="text-red-500">Dashboard</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/login"}>Login</Link>
        <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar