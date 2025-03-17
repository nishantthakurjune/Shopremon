import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Listing from "./pages/Listing.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import About from "./pages/About.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Collections from "./pages/Collections.jsx";
import Card from "./pages/Card.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
