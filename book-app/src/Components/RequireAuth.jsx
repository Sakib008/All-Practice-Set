import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BookContext } from "../Context/BookContext";

export function RequireAuth({ children }) {
  let location = useLocation();
  
  const { isLogin } = useContext(BookContext);
  return isLogin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
