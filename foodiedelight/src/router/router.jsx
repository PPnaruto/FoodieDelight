import { Routes, Route } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import AddRestro from "../components/restroForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-restro" element={<AddRestro />} />
    </Routes>
  );
};

export default Router;
