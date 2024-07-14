import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AllRestros from "./restro";

const Home = () => {
  const navigate = useNavigate();
  const [restros, setRestros] = useState([]);

  const getAllRestro = async () => {
    const allRestro = await axios.get("http://localhost:8080/restaurants");
    console.log("All Restro Data:", allRestro.data);
    setRestros(allRestro.data);
  };
  useEffect(() => {
    getAllRestro();
  }, [restros]);
  return (
    <>
      <div className="Navbar">
        <Button
          variant="primary"
          onClick={() => {
            navigate("/add-restro");
          }}
        >
          + Add Restro
        </Button>
      </div>
      <div className="all-restro-box">
        {restros.length > 0 &&
          restros.map((restro) => {
            return <AllRestros restro={restro} />;
          })}
      </div>
    </>
  );
};

export default Home;
