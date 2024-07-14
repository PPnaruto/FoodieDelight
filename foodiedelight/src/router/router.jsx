import { Routes, Route } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import AddRestro from "../components/restroForm";
import Restro from "../components/restro";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/all-restro" element={<Home />} />
      <Route path="/add-restro" element={<AddRestro />} />
      <Route path="/all-restro/:id" element={<Restro />} />
    </Routes>
  );
};

export default Router;
