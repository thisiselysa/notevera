import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Other from "./pages/Other";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT → redirect otomatis */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />

        {/* PUBLIC ROUTES */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/other"
          element={
            <ProtectedRoute>
              <Other />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;