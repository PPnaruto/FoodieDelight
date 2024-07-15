import { Routes, Route } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import AddRestro from "../components/restroForm";
import Restro from "../components/restro";
// import { AuthProvider } from "../context/authContext";
import ProtectedRoute from "./protectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/login" element={<Admin />} />
      <Route
        path="/all-restro"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-restro"
        element={
          <ProtectedRoute>
            <AddRestro />
          </ProtectedRoute>
        }
      />
      <Route
        path="/all-restro/:id"
        element={
          <ProtectedRoute>
            <Restro />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
