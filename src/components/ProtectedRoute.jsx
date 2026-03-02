import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // kalau belum login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // kalau sudah login
  return children;
}

export default ProtectedRoute;