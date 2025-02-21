import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./satoshi.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <Toaster position="bottom-right" />
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
