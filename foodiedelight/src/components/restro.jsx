import { useContext } from "react";
import AddRestro from "./restroForm";
import { RestroContext } from "../context/restroContext";

const Restro = () => {
  const { restroById } = useContext(RestroContext);
  console.log("Restro Data through Context", restroById);
  return <AddRestro restro={restroById} />;
};

export default Restro;
