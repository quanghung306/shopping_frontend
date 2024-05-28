import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebars from "./layouts/sidebar/Sidebars";
import HomePage from "./page/HomePage";
import HelpPage from "./page/HelpPage";
import JoinusPage from "./page/JoinusPage";
import SignInPage from "./page/SignInPage";
import StorePage from "./page/StorePage";
import NotFoundPage from "./page/NotFoundPage";
import Footer from "./layouts/banner/Footer";
import MenuSidebar from "./layouts/sidebar/MenuSidebar";
import Dynamic from "./page/Dynamic";
import SignUpPage from "./page/SignUpPage";
import { useState } from "react";
import AccountSettings from "./page/AccountSettings";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Sidebars isLoggedIn={isLoggedIn} user={currentUser} />
      <MenuSidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/join-us" element={<JoinusPage />} />
        <Route path="/sign-in" element={<SignInPage setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sp/:productId" element={<Dynamic />} />
        <Route path="/account-settings" element={<AccountSettings user={currentUser} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
