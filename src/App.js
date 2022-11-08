import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
