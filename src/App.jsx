import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <div className="bg-ivoryWhite text-charcoalBlack font-satoshi-regular">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
