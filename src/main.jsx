// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BookingProvider } from "./context/BookingContext.jsx";
import { CarsProvider } from "./context/CarsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CarsProvider>
          <BookingProvider>
            <App />
          </BookingProvider>
        </CarsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);