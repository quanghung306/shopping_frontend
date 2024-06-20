import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Sidebars from "./layouts/sidebar/Sidebars";
import HomePage from "./page/HomePage";
import HelpPage from "./page/HelpPage";
import JoinusPage from "./page/JoinusPage";
import SignInPage from "./page/SignInPage";
import StorePage from "./page/StorePage";
import NotFoundPage from "./page/NotFoundPage";
import Footer from "./layouts/banner/Footer";
import Dynamic from "./page/Dynamic";
import SignUpPage from "./page/SignUpPage";
import AccountSettings from "./page/AccountSettings";
import ProfilePage from "./page/ProfilePage";
import ProductList from "./page/ProductList";
import CheckoutSuccess from "./page/CheckoutSuccess";
import AdminDashboard from "./page/Admin/AdminDashboard";
import Products from "./page/Admin/Products";
import Summary from "./page/Admin/Summary";
import CreateProduct from "./page/Admin/CreateProduct";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <ToastContainer />
        <Sidebars />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/join-us" element={<JoinusPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/sp/:productId" element={<Dynamic />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/account-profile" element={<ProfilePage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="summary" element={<Summary />} />
            <Route path="products" element={<Products />}>
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
