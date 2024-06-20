import { Link } from "react-router-dom";
import logo from "../../assets/Glasgow.webp";
import "./Sidebar.css";
import { Badge, Button, IconButton, Input } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useGetAllProductsQuery } from "../../stores/slice/apiRequest";
import { toast } from "react-toastify";
import { logoutUser } from "../../stores/slice/AuthSlice"; 
import UserPopover from "../../page/UserPopover";
const Sidebars = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { data } = useGetAllProductsQuery();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setSearch(searchTerm);
    setFilteredData(filteredResults);
  };

  const countTotal = cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const itemTotal = price * cartQuantity;
      cartTotal.total += itemTotal;
      cartTotal.quantity += cartQuantity;
      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="Menusidebar">
        <ul>
          <li>
            <Link to="/productlist">
              <Button variant="text">New & Featured</Button>
            </Link>
          </li>
          <li>
            <Button variant="text">MEN</Button>
          </li>
          <li>
            <Button variant="text">WOMEN</Button>
          </li>
          <li>
            <Button variant="text">SALE</Button>
          </li>
          <Input
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className="search-input"
          />
          {filteredData.length > 0 && filteredData.length < 20 ? (
            <div className="search-results">
              {filteredData.map((item) => (
                <Link to={`/sp/${item.id}`} key={item.id}>
                  <p>{item.title}</p>
                </Link>
              ))}
            </div>
          ) : null}
          <li>
            <Link to="/store" className="nav-link">
              <IconButton aria-label="cart">
                <Badge badgeContent={countTotal.quantity} color="primary">
                  <ShoppingBagOutlinedIcon color="action" />
                </Badge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
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
          {auth._id ? (
            <div className="nav-link">
              {auth.isAdmin && (
                <Link to="/admin/summary" className="nav-link">
                  Admin
                </Link>
              )}
              <Link to="/" className="nav-link">
                <UserPopover />
              </Link>
              <div
                onClick={() => {
                  dispatch(logoutUser(null));
                  toast.warning("Logged out!", { position: "bottom-left" });
                }}
                className="nav-link"
              >
                Logout
              </div>
            </div>
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
