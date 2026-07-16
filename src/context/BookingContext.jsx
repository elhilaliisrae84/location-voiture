// src/context/BookingContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  // Au chargement, on récupère toutes les réservations stockées
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  function addBooking(booking) {
    const newBooking = {
      ...booking,
      id: Date.now(), // identifiant unique simple basé sur l'heure actuelle
      userEmail: user.email,
      status: "confirmée",
      createdAt: new Date().toISOString(),
    };

    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));

    return newBooking;
  }

  function cancelBooking(bookingId) {
    const updated = bookings.map((b) =>
      b.id === bookingId ? { ...b, status: "annulée" } : b
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  }

  // Réservations de l'utilisateur actuellement connecté uniquement
  const myBookings = user
    ? bookings.filter((b) => b.userEmail === user.email)
    : [];

  return (
    <BookingContext.Provider
      value={{ bookings, myBookings, addBooking, cancelBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}