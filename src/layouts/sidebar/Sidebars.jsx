import { Link } from "react-router-dom";
import logo from "../../assets/Glasgow.webp";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

export const Sidebars = ({ isLoggedIn, user }) => {
  return (
    <div className="sidebar">
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
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
          {isLoggedIn && user ? (
            <Link to="/" className="nav-link">
              <Avatar>{user.email.charAt(0).toUpperCase()}</Avatar>
            </Link>
          ) : (
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebars;
