import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home.jsx";
import Listing from "./routes/Listing.jsx";
import Men from "./routes/Men.jsx";
import Women from "./routes/Women.jsx";
import About from "./routes/About.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./routes/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Collections from "./routes/Collections.jsx";
import Card from "./routes/Card.jsx";

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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
