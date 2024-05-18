import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebars from "./layouts/sidebar/Sidebars";
import HomePage from "./page/HomePage";
import HelpPage from "./page/HelpPage";
import JoinusPage from "./page/JoinusPage";
import SignInPage from "./page/SignInPage";
import StorePage from "./page/StorePage"
import NotFoundPage from "./page/NotFoundPage";
import Footer from "./layouts/banner/Footer";
import MenuSidebar from "./layouts/sidebar/MenuSidebar";
import Dynamic from "./page/Dynamic";

function App() {
  const courseId= [
    {id : "sp1"},
    {id : "sp2"},
  ]



  return (
    <>
      <Sidebars />
      <MenuSidebar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/join-us" element={<JoinusPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/store" element={<StorePage/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/sp/:productId" element={<Dynamic/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
