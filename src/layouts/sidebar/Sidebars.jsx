import { Link } from "react-router-dom";
import logo from "../../assets/Glasgow.webp";
import "./Sidebar.css"

export const Sidebars = () => {
  return (
    <div class="sidebar">
      <div class="sidebar-logo">
        <a href="#">
          <img src={logo} />
        </a>
      </div>

      <ul>
        <li>
          <Link to="/" className="nav-link">
            Find a Store
          </Link>
        </li>
        <li>
          <Link to="/help" className="nav-link">
            Help
          </Link>
        </li>
        <li>
          <Link to="/join-us" className="nav-link">
            Join Us
          </Link>
        </li>
        <li>
          <Link to="/sign-in" className="nav-link">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
    
    
  );
};
export default Sidebars;
