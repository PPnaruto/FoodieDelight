import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import RestroCard from "./restroCard";
import { RestroContext } from "../context/restroContext";
import { API } from "../constants/api";

const Home = () => {
  const navigate = useNavigate();
  const [restros, setRestros] = useState([]);
  const { setRestroById } = useContext(RestroContext);

  const getAllRestro = async () => {
    const allRestro = await axios.get(`${API.RESTRO}`);
    console.log("All Restro Data:", allRestro.data);
    setRestros(allRestro.data);
  };
  useEffect(() => {
    getAllRestro();
  }, [setRestros]);

  const getRestroById = async (id) => {
    const restroData = await axios.get(
      `${API.RESTRO}${id}`
    );
    return restroData.data;
  };

  const handleCallback = async (id) => {
    console.log("Restro Id:", id);
    const data = await getRestroById(id);
    console.log("Data by Id:", data);
    setRestroById({ ...data });
    navigate(`/all-restro/${id}`);
  };

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
            return (
              <RestroCard
                restro={restro}
                callback={() => handleCallback(restro.id)}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
