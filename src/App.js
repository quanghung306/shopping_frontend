import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebars from "./layouts/sidebar/Sidebars";
import HomePage from "./page/HomePage";
import HelpPage from "./page/HelpPage";
import JoinusPage from "./page/JoinusPage";
import SignInPage from "./page/SignInPage";
import NotFoundPage from "./page/NotFoundPage";
import Footer from "./layouts/banner/Footer";

function App() {
  return (
    <>
      <Sidebars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/join-us" element={<JoinusPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
