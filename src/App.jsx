import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className="bg-ivoryWhite text-charcoalBlack font-satoshi-regular">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
