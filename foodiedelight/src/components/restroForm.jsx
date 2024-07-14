import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRestro = () => {
  const [restroData, setRestroData] = useState({
    restro: "",
    address: "",
    contact_no: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRestroData({
      ...restroData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form has been submitted");
    try {
      await axios.post("http://localhost:8080/restaurants", restroData);
      console.log("Data has been added succesfully", restroData);
      navigate("/home");
    } catch (err) {
      console.log("Something went Wrong");
    }
  };
  return (
    <div className="form-parent">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Restro name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Restaurant Name"
            name="restro"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address here"
            name="address"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact no.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Restro contact here"
            name="contact_no"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddRestro;
